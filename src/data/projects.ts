import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'vulnerability-risk-scoring',
    title: 'Vulnerability Risk Scoring (VRS)',
    shortDescription:
      'Enhanced vulnerability prioritization system built on top of CVSS, using machine learning and contextual intelligence to produce dynamic, actionable risk scores.',
    detailedDescription:
      'The Vulnerability Risk Scoring (VRS) system addresses a fundamental limitation of traditional CVSS scoring: context blindness. A "Critical" vulnerability on an isolated development server does not carry the same risk as one on a public-facing production API. VRS extends the CVSS framework by incorporating machine learning models and contextual intelligence factors — including asset exposure, exploit availability, business impact, and threat intelligence feeds — to produce dynamic risk scores that reflect actual organizational risk rather than generic severity ratings. The system is designed to help security teams prioritize remediation efforts more effectively by surfacing what matters most in their specific environment.',
    problemStatement:
      'CVSS scores provide a standardized severity rating but lack organizational context. Security teams are overwhelmed with hundreds of "High" and "Critical" vulnerabilities, many of which pose minimal actual risk to their specific infrastructure. Without contextual prioritization, remediation efforts are spread thin across vulnerabilities that may not represent genuine threats, while truly critical risks in exposed systems may be deprioritized.',
    solutionOverview:
      'VRS ingests vulnerability scan data, asset inventory information, and threat intelligence feeds. A machine learning model processes these inputs to produce an enhanced risk score that reflects both the technical severity of the vulnerability and its contextual relevance to the organization. The system factors in network exposure, asset criticality, known exploit availability, and active threat intelligence.',
    architectureNotes:
      'The system follows a pipeline architecture: data ingestion from vulnerability scanners and asset databases → feature engineering combining CVSS base metrics with contextual signals → ML model scoring → prioritized output with explanations. The ML component uses supervised learning trained on historical vulnerability and exploitation data.',
    threatModel:
      'Key security considerations for the VRS system itself include: ensuring the integrity of vulnerability scan data in transit and at rest, protecting ML model weights from tampering that could manipulate risk scores, implementing access controls to prevent unauthorized modification of asset criticality data, and maintaining audit logs of all scoring decisions for accountability.',
    techStack: [
      { category: 'Languages', items: ['Python'] },
      { category: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
      { category: 'Security', items: ['CVSS', 'Threat Intelligence APIs'] },
      { category: 'Data', items: ['SQLite', 'CSV Processing'] },
      { category: 'Tools', items: ['Jupyter Notebook', 'Git'] },
    ],
    implementationDetails:
      'The implementation involves a multi-stage pipeline. First, vulnerability data is normalized from scanner output into a structured format. Contextual features — asset exposure, network zone, business function — are joined from the asset inventory. The ML model, trained on historical exploitation patterns, produces a risk multiplier that adjusts the base CVSS score. Results are ranked and presented with explanatory factors so security analysts can understand why each vulnerability was prioritized.',
    challengesFaced:
      'Key challenges included obtaining quality training data for the ML model, as historical vulnerability exploitation data is often incomplete or proprietary. Feature engineering required careful consideration of which contextual factors most strongly correlate with actual exploitation. Balancing model complexity with interpretability was important — security teams need to understand why a vulnerability was scored a certain way.',
    lessonsLearned:
      'Contextual prioritization is as important as technical severity in real-world security operations. ML models in security require careful validation and should augment, not replace, analyst judgment. Explainability is critical — a risk score without reasoning is difficult to act on.',
    futureImprovements:
      'Planned improvements include integration with real-time threat intelligence feeds, support for additional vulnerability scanner formats, a web-based dashboard for interactive exploration, and continuous model retraining as new exploitation data becomes available.',
    screenshots: [
      {
        src: '/images/projects/vrs/architecture.png',
        alt: 'VRS System Architecture Diagram',
        caption: 'System architecture showing data flow from ingestion to scoring',
      },
      {
        src: '/images/projects/vrs/screenshot-1.png',
        alt: 'VRS Scoring Output',
        caption: 'Sample vulnerability risk scores with contextual factors',
      },
    ],
    githubUrl: 'https://github.com/Malaiyappan-STUX05',
    status: 'completed',
    featured: true,
    order: 1,
    tags: ['machine-learning', 'vulnerability-management', 'python', 'cvss'],
  },
  {
    id: 'insider-threat-detection',
    title: 'ML-Based Insider Threat Detection',
    shortDescription:
      'Machine learning system designed to detect anomalous user behavior patterns for insider threat identification, using behavioral analytics and monitoring.',
    detailedDescription:
      'This project implements a machine learning-based approach to insider threat detection. The system analyzes user behavior patterns — including access patterns, data movement, authentication events, and activity timing — to establish behavioral baselines and flag anomalies that may indicate potential insider threats. The goal is to identify suspicious activity that traditional rule-based systems might miss, while being designed to minimize false positives through contextual analysis.',
    problemStatement:
      'Insider threats are among the most difficult security challenges to detect because the actors already have legitimate access to systems. Traditional security controls focus on external threats and may not catch authorized users who begin behaving anomalously. Rule-based detection systems often generate excessive false positives or miss subtle behavioral changes that indicate a developing threat.',
    solutionOverview:
      'The system builds behavioral profiles for users based on historical activity data. Using unsupervised and supervised ML techniques, it identifies deviations from established patterns. Anomalies are scored and presented to security analysts for investigation, with contextual information to help distinguish between benign unusual activity and genuine threats.',
    architectureNotes:
      'The architecture consists of a data collection layer that aggregates logs from authentication systems, file access records, and network activity. A feature engineering pipeline transforms raw events into behavioral metrics. The ML model layer includes both clustering for baseline establishment and classification for anomaly detection. An alerting layer presents findings to analysts.',
    threatModel:
      'Security considerations include protecting the behavioral data collected on users, ensuring the detection system itself cannot be manipulated to hide malicious activity, maintaining strict access controls on alert data, and addressing privacy implications of user behavior monitoring.',
    techStack: [
      { category: 'Languages', items: ['Python'] },
      { category: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
      { category: 'Security', items: ['Behavioral Analytics', 'SIEM Integration'] },
      { category: 'Data', items: ['Log Processing', 'Feature Engineering'] },
      { category: 'Tools', items: ['Jupyter Notebook', 'Git'] },
    ],
    implementationDetails:
      'The system processes user activity logs to extract features such as login times, file access frequency, data transfer volumes, and application usage patterns. A baseline model is trained on historical data to establish normal behavior profiles. Anomaly detection algorithms — including isolation forest and clustering approaches — identify deviations. Results are scored and ranked by anomaly severity.',
    challengesFaced:
      'Obtaining realistic user behavior data for training was a significant challenge, as real insider threat datasets are rare and sensitive. Defining what constitutes "anomalous" versus merely "unusual" required careful threshold tuning. Balancing detection sensitivity with false positive rates required iterative refinement.',
    lessonsLearned:
      'Insider threat detection requires a nuanced approach — context is everything. Behavioral baselines must account for role changes, project shifts, and other legitimate reasons for behavior change. ML models in this space must be transparent and auditable to maintain trust.',
    futureImprovements:
      'Future work includes integrating with real SIEM platforms, adding temporal pattern analysis, implementing real-time streaming detection, and developing a dashboard for security operations center integration.',
    screenshots: [
      {
        src: '/images/projects/insider-threat/architecture.png',
        alt: 'Insider Threat Detection Architecture',
        caption: 'System architecture for behavioral analytics pipeline',
      },
      {
        src: '/images/projects/insider-threat/screenshot-1.png',
        alt: 'Anomaly Detection Output',
        caption: 'Sample anomaly detection results with behavioral scoring',
      },
    ],
    githubUrl: 'https://github.com/Malaiyappan-STUX05',
    status: 'completed',
    featured: true,
    order: 2,
    tags: ['machine-learning', 'insider-threat', 'behavioral-analytics', 'python'],
  },
  {
    id: 'secure-file-upload-api',
    title: 'Secure File Upload API',
    shortDescription:
      'Production-grade file upload service with multi-layer security including malware scanning, file validation, content inspection, and real-time security monitoring.',
    detailedDescription:
      'This project implements a secure file upload API designed with defense-in-depth principles. Rather than relying on a single security control, the system layers multiple validation and scanning mechanisms to ensure uploaded files are safe. The API handles file type validation, content inspection, malware scanning, size restrictions, and maintains comprehensive security logging and alerting throughout the process.',
    problemStatement:
      'File upload functionality is a common attack vector in web applications. Attackers exploit insufficient validation to upload malicious files — webshells, malware, or scripts — that can compromise servers and applications. Many implementations rely solely on file extension checking, which is trivially bypassed.',
    solutionOverview:
      'The API implements multiple validation layers: file type verification using magic bytes rather than extensions, content-type validation, malware scanning with ClamAV, file size limits, filename sanitization, and secure storage with restricted permissions. All upload attempts are logged with security-relevant metadata, and suspicious uploads trigger alerts.',
    architectureNotes:
      'The API follows a pipeline pattern: request validation → file metadata extraction → magic byte verification → content-type validation → malware scanning → secure storage → response with security metadata. Each layer can independently reject a file. The logging layer captures all events for security monitoring.',
    threatModel:
      'Threats addressed include: malicious file upload (webshells, malware), extension spoofing, content-type manipulation, denial of service through large file uploads, filename injection attacks, and path traversal through crafted filenames. Each threat is mapped to specific controls in the pipeline.',
    techStack: [
      { category: 'Languages', items: ['Python'] },
      { category: 'Security', items: ['ClamAV', 'File Validation', 'Content Inspection'] },
      { category: 'Cloud', items: ['AWS S3'] },
      { category: 'DevOps', items: ['Docker'] },
      { category: 'Monitoring', items: ['Logging', 'Alerting'] },
    ],
    implementationDetails:
      'The API is built with Python and exposes REST endpoints for file upload. Each uploaded file passes through the validation pipeline sequentially. Magic byte verification reads the actual file header to determine type, preventing extension-based bypasses. ClamAV integration provides malware scanning. Files that pass all checks are stored in isolated storage with restricted permissions. Security logs capture file hashes, source IPs, validation results, and timestamps.',
    challengesFaced:
      'Balancing security with usability was a key challenge — overly aggressive validation can block legitimate files. Configuring ClamAV for accurate scanning with minimal false positives required tuning. Handling large files efficiently without exhausting server resources required implementing streaming processing.',
    lessonsLearned:
      'Defense in depth is essential for file upload security — no single control is sufficient. Magic byte validation is far more reliable than extension checking. Comprehensive logging is critical for incident response. Security controls should fail closed by default.',
    futureImprovements:
      'Planned enhancements include integration with cloud-based sandboxing for dynamic file analysis, support for additional file type validations, rate limiting per user, and a security dashboard for upload monitoring.',
    screenshots: [
      {
        src: '/images/projects/secure-upload/architecture.png',
        alt: 'Secure Upload API Architecture',
        caption: 'Multi-layer validation pipeline architecture',
      },
      {
        src: '/images/projects/secure-upload/screenshot-1.png',
        alt: 'API Security Logs',
        caption: 'Security monitoring dashboard showing upload validation results',
      },
    ],
    githubUrl: 'https://github.com/Malaiyappan-STUX05',
    status: 'completed',
    featured: true,
    order: 3,
    tags: ['api-security', 'file-upload', 'malware-scanning', 'python', 'defense-in-depth'],
  },
  {
    id: 'nist-csf-simulation',
    title: 'NIST CSF Security Simulation',
    shortDescription:
      'Docker-based security environment simulating the NIST Cybersecurity Framework, implementing Identify, Protect, Detect, Respond, and Recover functions.',
    detailedDescription:
      'This project creates a containerized security environment that simulates the five core functions of the NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, and Recover. Built using Docker, the simulation provides a controlled, reproducible environment for understanding how the NIST CSF functions map to real security controls and technologies. Each function is represented by specific containerized services and configurations.',
    problemStatement:
      'The NIST Cybersecurity Framework is widely adopted but can feel abstract to those learning how its functions translate to actual security implementations. Understanding how Identify, Protect, Detect, Respond, and Recover map to specific tools, configurations, and processes requires hands-on experience that is difficult to gain without a dedicated lab environment.',
    solutionOverview:
      'The simulation uses Docker containers to represent each NIST CSF function. The Identify function includes asset discovery and inventory services. The Protect function implements access controls and encryption. The Deploy function runs monitoring and detection tools. The Respond function includes incident response automation. The Recover function demonstrates backup and restoration processes.',
    architectureNotes:
      'The environment consists of multiple Docker containers orchestrated via Docker Compose. Each container represents a security service mapped to a NIST CSF function. Network segmentation between containers simulates security zones. The architecture is designed to be reproducible and easily deployable.',
    threatModel:
      'The simulation itself serves as a learning platform for threat modeling. Each NIST CSF function addresses specific threat categories: Identify addresses asset visibility gaps, Protect addresses unauthorized access, Detect addresses threat discovery, Respond addresses incident handling, and Recover addresses business continuity.',
    techStack: [
      { category: 'DevOps', items: ['Docker', 'Docker Compose'] },
      { category: 'Security', items: ['NIST CSF', 'Security Tooling'] },
      { category: 'Systems', items: ['Linux', 'Network Configuration'] },
      { category: 'Monitoring', items: ['Security Monitoring', 'Log Analysis'] },
    ],
    implementationDetails:
      'The environment is defined through Docker Compose configuration with services mapped to each NIST CSF function. Asset discovery tools represent the Identify function. Firewall rules and access controls represent Protect. Log aggregation and monitoring tools represent Detect. Automated response scripts represent Respond. Backup and restoration procedures represent Recover. The entire environment can be deployed with a single command.',
    challengesFaced:
      'Mapping abstract NIST CSF functions to concrete technical implementations required careful research and design. Ensuring the simulation was both educational and technically accurate was challenging. Container networking configuration to properly simulate security zones required iteration.',
    lessonsLearned:
      'The NIST CSF is most useful when its functions are understood as interconnected rather than isolated. Hands-on implementation reveals gaps that theoretical study misses. Containerization is an effective approach for building reproducible security lab environments.',
    futureImprovements:
      'Future work includes adding more sophisticated detection rules, implementing automated incident response playbooks, adding vulnerability scanning integration, and creating guided exercises for each NIST CSF function.',
    screenshots: [
      {
        src: '/images/projects/nist-csf/architecture.png',
        alt: 'NIST CSF Simulation Architecture',
        caption: 'Docker-based environment mapping to NIST CSF functions',
      },
      {
        src: '/images/projects/nist-csf/screenshot-1.png',
        alt: 'Simulation Environment',
        caption: 'Running simulation with security monitoring dashboard',
      },
    ],
    githubUrl: 'https://github.com/Malaiyappan-STUX05',
    status: 'completed',
    featured: true,
    order: 4,
    tags: ['nist-csf', 'docker', 'security-simulation', 'framework'],
  },
  {
    id: 'crnn-ocr',
    title: 'CRNN-Based Doctor Handwriting OCR',
    shortDescription:
      'AI-powered optical character recognition system using Convolutional Recurrent Neural Networks to decode challenging medical handwriting.',
    detailedDescription:
      'This project applies deep learning to the problem of decoding doctor handwriting — a longstanding challenge in healthcare documentation. Using a Convolutional Recurrent Neural Network (CRNN) architecture, the system processes images of handwritten medical text and produces machine-readable output. The project demonstrates capabilities in computer vision, deep learning, and practical AI application development.',
    problemStatement:
      'Medical handwriting recognition is a notoriously difficult problem in OCR. Doctor handwriting is often illegible even to humans, and standard OCR systems perform poorly on handwritten text. This creates challenges for digitizing medical records, prescriptions, and clinical notes.',
    solutionOverview:
      'The CRNN architecture combines convolutional layers for visual feature extraction with recurrent layers for sequence modeling. This approach is well-suited to handwriting recognition because it learns both the visual characteristics of handwritten characters and the sequential relationships between them.',
    architectureNotes:
      'The model follows the standard CRNN architecture: CNN layers extract visual features from input images, RNN layers (typically LSTM or GRU) model sequential dependencies, and a CTC (Connectionist Temporal Classification) loss function handles alignment between input and output sequences.',
    threatModel:
      'As an AI/ML project, key considerations include training data quality and bias, model robustness against adversarial inputs, and ensuring the system handles edge cases gracefully without producing confident but incorrect outputs.',
    techStack: [
      { category: 'Languages', items: ['Python'] },
      { category: 'Deep Learning', items: ['TensorFlow', 'Keras'] },
      { category: 'Computer Vision', items: ['OpenCV', 'Pillow'] },
      { category: 'Data', items: ['NumPy', 'Pandas'] },
      { category: 'Tools', items: ['Jupyter Notebook', 'Git'] },
    ],
    implementationDetails:
      'The model is trained on handwriting datasets with medical text samples. Image preprocessing includes normalization, noise reduction, and augmentation. The CRNN model is implemented using TensorFlow/Keras with CNN feature extraction layers followed by bidirectional LSTM layers. CTC loss is used for training without requiring character-level alignment.',
    challengesFaced:
      'Obtaining sufficient medical handwriting training data was challenging due to privacy constraints. The variability in handwriting styles required extensive data augmentation. Achieving acceptable accuracy on particularly illegible samples required iterative model refinement.',
    lessonsLearned:
      'CRNN architectures are effective for sequence recognition tasks but require substantial training data. Domain-specific OCR (like medical handwriting) benefits from specialized datasets. Model confidence calibration is important — knowing when the model is uncertain is as important as getting correct predictions.',
    futureImprovements:
      'Future improvements include expanding the training dataset with more diverse handwriting samples, implementing a language model for post-processing correction, and exploring transformer-based architectures for improved accuracy.',
    screenshots: [],
    githubUrl: 'https://github.com/Malaiyappan-STUX05',
    status: 'completed',
    featured: false,
    order: 5,
    tags: ['deep-learning', 'computer-vision', 'ocr', 'tensorflow', 'crnn'],
  },
];

// ── Helper Functions ─────────────────────────────────────────

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllProjectIds(): string[] {
  return projects.map(p => p.id);
}

export function getProjectsForHomepage(): Project[] {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => a.order - b.order);
}
