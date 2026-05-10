const express = require('express');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize Mail Transporter once for better performance and stability
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false // Helps with some server certificates
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100
});

console.log('Server Start Time:', new Date().toLocaleString());

// Verify transporter connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Mail Transporter Error:', error);
    } else {
        console.log('Mail Server is ready to take messages');
    }
});

// Create PDF function to generate a professional job card/invoice design
const generatePDF = (formData) => {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({ margin: 0, size: 'A4' }); // 0 margin to draw full-width borders
            const buffers = [];

            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => resolve(Buffer.concat(buffers)));
            doc.on('error', reject);

            const now = new Date();
            const timestamp = now.toLocaleString('en-US', {
                hour12: true, year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
            });


            // Colors
            const brandDark = '#1a1a1a';
            const brandAccent = '#B85C38';
            const textGray = '#4b5563';
            const lightBorder = '#e5e7eb';
            const tableHeaderBg = '#f3f4f6';

            // --- PAGE BORDER ---
            doc.rect(20, 20, 555, 802).lineWidth(1).strokeColor(lightBorder).stroke();
            doc.rect(25, 25, 545, 792).lineWidth(0.5).strokeColor(lightBorder).stroke();

            // --- HEADER SECTION ---
            doc.rect(25, 25, 545, 100).fill('#fafafa');

            const logoPath = path.join(__dirname, 'logo.png');
            doc.image(logoPath, 50, 40, { width: 110 });
            doc.fillColor(brandAccent).fontSize(9).font('Helvetica-Bold').text('PREMIUM WORKSPACE', 52, 95);

            // Right side header
            doc.fillColor(brandDark).fontSize(24).font('Helvetica-Bold').text('JOB CARD', 0, 45, { align: 'right', width: 545, margins: { right: 50 } });
            doc.fillColor(textGray).fontSize(10).font('Helvetica').text(`Generated: ${timestamp}`, 0, 75, { align: 'right', width: 545, margins: { right: 50 } });

            doc.moveTo(25, 125).lineTo(570, 125).lineWidth(2).strokeColor(brandAccent).stroke();

            let currentY = 150;

            // --- HELPER TO DRAW TABLE ROWS ---
            const drawRow = (label1, val1, label2, val2, y, isGrayBg = false) => {
                if (isGrayBg) doc.rect(40, y - 5, 515, 25).fill('#f9fafb');

                doc.fillColor(textGray).fontSize(10).font('Helvetica-Bold').text(label1, 50, y);
                doc.fillColor(brandDark).font('Helvetica').text(val1 || 'N/A', 150, y, { width: 150 });

                if (label2) {
                    doc.fillColor(textGray).font('Helvetica-Bold').text(label2, 320, y);
                    doc.fillColor(brandDark).font('Helvetica').text(val2 || 'N/A', 400, y, { width: 140 });
                }

                doc.moveTo(40, y + 20).lineTo(555, y + 20).lineWidth(0.5).strokeColor(lightBorder).stroke();
                return y + 25;
            };

            const drawSectionTitle = (title, y) => {
                doc.rect(40, y, 515, 25).fill(brandDark);
                doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text(title.toUpperCase(), 50, y + 8);
                return y + 40;
            };

            // --- CLIENT DETAILS TABLE ---
            currentY = drawSectionTitle('1. Client Details', currentY);
            currentY = drawRow('User Type:', formData.userType || 'Professional', 'Date:', timestamp.split(',')[0], currentY, false);
            currentY = drawRow('Full Name:', formData.fullName, 'Mobile:', formData.mobileNumber, currentY, true);
            currentY = drawRow('Email:', formData.email, '', '', currentY, false);

            if (formData.userType === 'Professional') {
                currentY = drawRow('Company:', formData.companyName, 'GST No:', formData.gstNumber, currentY, true);
                currentY = drawRow('Job Role:', formData.jobRole, '', '', currentY, false);
            } else {
                currentY = drawRow('Institution:', formData.institutionName, 'Course:', formData.courseField, currentY, true);
            }

            currentY += 20;

            // --- WORKSPACE ALLOCATION TABLE ---
            currentY = drawSectionTitle('2. Workspace Allocation', currentY);

            // Special wide row for workspace
            doc.rect(40, currentY - 5, 515, 30).fill('#f9fafb');
            doc.fillColor(textGray).fontSize(10).font('Helvetica-Bold').text('Selected Plan:', 50, currentY + 2);
            doc.fillColor(brandAccent).fontSize(11).font('Helvetica-Bold').text(formData.workspace || 'N/A', 150, currentY + 2, { width: 390 });
            doc.moveTo(40, currentY + 25).lineTo(555, currentY + 25).lineWidth(0.5).strokeColor(lightBorder).stroke();
            currentY += 35;

            const formatDt = (dt) => {
                if (!dt) return 'N/A';
                const dateObj = new Date(dt);
                if (isNaN(dateObj.getTime())) return dt.replace('T', ' ');
                return dateObj.toLocaleString('en-US', {
                    hour12: true, year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
                });
            };
            currentY = drawRow('Start Date/Time:', formatDt(formData.startDate), 'End Date/Time:', formatDt(formData.endDate), currentY, false);

            currentY += 20;

            // --- OFFICE USE ---
            currentY = drawSectionTitle('3. Authorization & Notes', currentY);
            doc.rect(40, currentY, 515, 100).lineWidth(1).strokeColor(lightBorder).stroke();

            doc.fillColor(textGray).fontSize(10).font('Helvetica-Bold').text('Admin Remarks:', 50, currentY + 15);
            doc.moveTo(140, currentY + 25).lineTo(530, currentY + 25).dash(2, { space: 2 }).strokeColor('#d1d5db').stroke();
            doc.moveTo(50, currentY + 55).lineTo(530, currentY + 55).stroke();
            doc.moveTo(50, currentY + 85).lineTo(530, currentY + 85).stroke();
            doc.undash();

            // Signatures
            currentY += 130;
            doc.moveTo(50, currentY + 40).lineTo(200, currentY + 40).lineWidth(1).strokeColor(brandDark).stroke();
            doc.fillColor(brandDark).fontSize(10).font('Helvetica-Bold').text('Client Signature', 80, currentY + 50);

            doc.moveTo(380, currentY + 40).lineTo(530, currentY + 40).stroke();
            doc.text('Authorized Signatory', 400, currentY + 50);

            // --- FOOTER ---
            doc.rect(25, 780, 545, 20).fill(brandDark);
            doc.fillColor('#ffffff').fontSize(8).font('Helvetica').text('CONFIDENTIAL • SYSTEM GENERATED DOCUMENT • SLAB WORKSPACE', 0, 786, { align: 'center', width: 595 });

            doc.end();

        } catch (err) {
            reject(err);
        }
    });
};

app.post('/api/contact', async (req, res) => {
    try {
        const formData = req.body;

        // 1. Generate PDF
        const pdfBuffer = await generatePDF(formData);

        // 2. Validate Environment Variables
        if (!process.env.GMAIL_USER || !process.env.RECEIVER_EMAIL) {
            throw new Error('Missing mail configuration in environment variables');
        }

        // 3. Send Mail (With Styled HTML Template)
        console.log(`Sending email from ${process.env.GMAIL_USER} to ${process.env.RECEIVER_EMAIL}...`);

        const emailHTML = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background-color: #1a1a1a; padding: 30px 20px; text-align: left;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 2px;">SLAB.</h1>
                <p style="color: #B85C38; margin: 8px 0 0 0; font-size: 11px; font-weight: 700; letter-spacing: 3px;">PREMIUM WORKSPACE</p>
            </div>
            
            <div style="padding: 40px 30px; background-color: #ffffff;">
                <h2 style="color: #1a1a1a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px;">New Workspace Inquiry</h2>
                
                <p style="color: #4b5563; line-height: 1.6; font-size: 15px;">Hello Team,</p>
                <p style="color: #4b5563; line-height: 1.6; font-size: 15px;">You have received a new premium workspace inquiry from <strong style="color: #1a1a1a;">${formData.fullName}</strong>.</p>
                
                <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-left: 4px solid #B85C38; border-radius: 6px; padding: 20px; margin: 30px 0;">
                    <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Quick Summary</p>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 35%;">Applicant:</td>
                            <td style="padding: 8px 0; color: #1a1a1a; font-weight: 700;">${formData.fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; border-top: 1px solid #e5e7eb;">Phone:</td>
                            <td style="padding: 8px 0; color: #1a1a1a; font-weight: 700; border-top: 1px solid #e5e7eb;">${formData.mobileNumber}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; border-top: 1px solid #e5e7eb;">Interest:</td>
                            <td style="padding: 8px 0; color: #B85C38; font-weight: 700; border-top: 1px solid #e5e7eb;">${formData.workspace ? formData.workspace.split('-')[0].trim() : 'N/A'}</td>
                        </tr>
                    </table>
                </div>

                <p style="color: #4b5563; font-size: 15px; margin-bottom: 0; line-height: 1.6;">The complete <strong style="color: #1a1a1a;">Job Card</strong> with full requirement details, dates, and authorization fields is attached to this email as a PDF.</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; text-align: left; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 11px; font-weight: 600; letter-spacing: 1px;">SYSTEM GENERATED NOTIFICATION</p>
                <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">Slab Workspace Contact Portal</p>
            </div>
        </div>
        `;

        const info = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Slab Inquiry: ${formData.fullName}`,
            text: `New inquiry received from ${formData.fullName}. Please find the attached PDF for details.`,
            html: emailHTML,
            attachments: [
                {
                    filename: `Inquiry_${formData.fullName.replace(/\s+/g, '_')}.pdf`,
                    content: pdfBuffer,
                },
            ],
        });

        console.log("Email dispatched successfully. Message ID:", info.messageId);
        res.status(200).json({ 
            message: 'Email sent successfully',
            messageId: info.messageId 
        });

    } catch (error) {
        console.error("Critical Error in /api/contact:", error);
        res.status(500).json({ 
            error: 'Failed to process inquiry',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});