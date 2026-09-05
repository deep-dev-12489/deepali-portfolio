const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 36, size: 'A4' });
const outputPath = path.join(__dirname, 'public', 'resume.pdf');
const writeStream = fs.createWriteStream(outputPath);

doc.pipe(writeStream);

// Colors
const primaryColor = '#0F1E42';
const accentColor = '#2563EB';
const darkText = '#1E293B';
const lightText = '#64748B';

// Header
doc.fillColor(primaryColor).fontSize(22).font('Helvetica-Bold').text('Deepali Motwani');
doc.fillColor(accentColor).fontSize(12).font('Helvetica-Bold').text('AI & Cloud Infrastructure Engineer | DevOps & Web Developer');
doc.fontSize(9).font('Helvetica').fillColor(lightText).text('deepalimotwani8@gmail.com | +91 9170517934 | Kanpur, India | linkedin.com/in/deepali-motwani-53bb9025b | github.com/deep-dev-12489');

doc.moveDown(0.8);
doc.strokeColor('#E2E8F0').lineWidth(1).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
doc.moveDown(0.8);

// Profile
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFILE SUMMARY');
doc.moveDown(0.3);
doc.fillColor(darkText).fontSize(9.5).font('Helvetica').text(
  'Results-driven AI & Cloud Infrastructure Engineer and CRM Professional currently pursuing an MBA. Combines hands-on experience in Kubernetes cluster management, VictoriaMetrics HA observability, and S3 disaster recovery with AI engineering (Generative AI, RAG pipelines, agentic frameworks). Proven expertise in cost-benchmarking telemetry migrations, client relationship management, and digital media production.',
  { align: 'justify', lineGap: 3 }
);

doc.moveDown(0.8);

// Experience
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.4);

// Rankaltus
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('AI & Cloud Infrastructure Engineer — Rankaltus.com');
doc.fillColor(accentColor).fontSize(9).font('Helvetica').text('Nov 2025 – Present | Current Role');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Contributed to AI-driven cloud infrastructure initiatives, applying Kubernetes and observability practices to support scalable, reliable systems.');
doc.text('• Worked on Generative AI and RAG-based engineering tasks, leveraging LangChain/LangGraph pipelines and Gemini API integrations.');
doc.text('• Supported infrastructure reliability and monitoring efforts consistent with prior VictoriaMetrics/Kubernetes systems experience.');
doc.text('• Collaborated cross-functionally to align technical infrastructure work with broader project and business goals.');

doc.moveDown(0.6);

// Grovyn
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('Growth & Partnerships Associate (Intern) — Grovyn');
doc.fillColor(accentColor).fontSize(9).font('Helvetica').text('Jan 2026 – Mar 2026');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Managed active lead generation campaigns, identifying high-potential business partners and initiating conversion pipelines.');
doc.text('• Collaborated on building mutually beneficial partnerships, optimizing pitch resources, and aligning cross-functional goals.');

doc.moveDown(0.6);

// Webixy
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('Customer Relationship Management (CRM) Manager — Webixy Technologies Pvt Ltd');
doc.fillColor(accentColor).fontSize(9).font('Helvetica').text('Feb 2025 – Oct 2025');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Configured and optimized CRM databases to monitor customer touchpoints, reducing client friction and boosting satisfaction metrics.');
doc.text('• Structured feedback loops between engineering team and clients to translate technical requirements into successful product outcomes.');

doc.moveDown(0.6);

// Freelance
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('Freelance WordPress Developer & Web Designer — Independent Contracting');
doc.fillColor(accentColor).fontSize(9).font('Helvetica').text('Ongoing Contracting | Freelance');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Happynest.com: Built a fully customized Elementor site. Integrated plugins, styled custom CSS containers, and customized forms.');
doc.text('• Kanupriya.net: Designed and deployed a professional services portfolio. Audited page metrics and implemented schema tags.');

// Page 2
doc.addPage({ margin: 36, size: 'A4' });

// Projects Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('FEATURED AI & CLOUD PROJECTS');
doc.moveDown(0.4);

// FinanAI
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('FinanAI — Multimodal RAG Engine');
doc.fillColor(lightText).fontSize(8.5).font('Helvetica-Oblique').text('Tech: Python, Gemini 3 Flash, LangChain, ChromaDB, Streamlit');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Zero-Hallucination Visual Verification: Built a multimodal RAG engine for SEC 10-K analysis. Programmed LangChain pipelines with Gemini 3 Flash to verify numerical claims using exact page-level coordinate proofing.');
doc.text('• High-Density Chart Interpretation: Solved vector indexing gaps by running native visual reasoning on complex financial tables, bar graphs, and scatter plots.');
doc.text('• Obsidian Glass UI: Styled a highly responsive Streamlit application showcasing glassmorphism headers, citation highlights, and real-time document viewing widgets.');

doc.moveDown(0.6);

// Perimeter
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('Perimeter — AI Scope Creep Detector');
doc.fillColor(lightText).fontSize(8.5).font('Helvetica-Oblique').text('Tech: Next.js, Supabase, Anthropic Claude API, TypeScript');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• SOW Contract Parsing: B2B SaaS tool using Claude AI to detect scope creep in client requests against signed contracts.');
doc.text('• Change Order Automation: Automated change-order cost estimation and email draft generation to protect agency profit margins.');

doc.moveDown(0.6);

// VictoriaMetrics
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('VictoriaMetrics HA & Disaster Recovery Suite');
doc.fillColor(lightText).fontSize(8.5).font('Helvetica-Oblique').text('Tech: Kubernetes, VictoriaMetrics, Helm, MinIO S3, MetricsQL, Grafana');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• High Availability Topology: Built kind K8s clusters running vmsingle and vmcluster architecture (vminsert, vmselect, vmstorage). Validated pod self-healing, PVC crash recovery, and replication node failover scenarios.');
doc.text('• Enterprise Alerting & DR Automation: Programmed vmauth read/write RBAC boundaries, vmalert evaluation rules for pending pods/disk thresholds, and MinIO S3 automated backup & restore runbooks.');

doc.moveDown(0.6);

// IntelliAnalyze
doc.fillColor(darkText).fontSize(10.5).font('Helvetica-Bold').text('IntelliAnalyze — Intelligent Document Framework');
doc.fillColor(lightText).fontSize(8.5).font('Helvetica-Oblique').text('Tech: Python, LangGraph, Gemini API, Vector Search');
doc.fillColor(darkText).fontSize(9).font('Helvetica');
doc.text('• Agentic Graph Routing: Implemented structured analysis graphs in LangGraph, supporting self-correcting query nodes and tool routing for parsing high-density technical PDFs.');

doc.moveDown(0.8);

// Education
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.4);

doc.fillColor(darkText).fontSize(10).font('Helvetica-Bold').text('Master of Business Administration (MBA)');
doc.fillColor(lightText).fontSize(9).font('Helvetica').text('Chhatrapati Shahu Ji Maharaj University, Kanpur | Focus: International Business, Trade & Commerce (May 2025 – Jun 2027)');

doc.moveDown(0.3);

doc.fillColor(darkText).fontSize(10).font('Helvetica-Bold').text('Bachelor of Business Administration (BBA)');
doc.fillColor(lightText).fontSize(9).font('Helvetica').text('Dr. Virendra Swarup Institute of Computer Studies, Kanpur | Focus: Marketing (Dec 2022 – Dec 2025)');

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated public/resume.pdf');
});
