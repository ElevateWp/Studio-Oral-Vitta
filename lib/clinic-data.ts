export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: {
    baseRange: string;
    factors: string[];
    whatIsIncluded: string[];
    note: string;
  };
  beforeAfterCase: {
    category: string;
    clinicalContext: string;
    beforeLabel: string;
    afterLabel: string;
    beforeImage: string;
    afterImage: string;
    timeframe: string;
  };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates: { lat: number; lng: number };
  };
  contact: {
    phone: string;
    emergencyPhone: string;
    email: string;
    whatsapp: string;
  };
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: "Nova Dental Clinic",
  legalName: "Nova Dental Clinic Multan",
  tagline: "Restorative & Surgical Dentistry shaped by clinical precision and patient care.",
  establishedYear: 2018,
  primaryLocation: {
    street: "Bosan Rd, Near Sabzazar Metro Station, Opposite Mall of Multan",
    suite: "Gulgasht Colony",
    city: "Multan",
    state: "Punjab",
    postalCode: "60700",
    country: "Pakistan",
    directions: "Located conveniently on Bosan Road near Sabzazar Metro Station, directly opposite Mall of Multan, Gulgasht Colony.",
    landmarks: "Opposite Mall of Multan, Sabzazar Metro Station (Plus Code: 6FMJ+FM Multan)",
    coordinates: { lat: 30.2285, lng: 71.4812 },
  },
  contact: {
    phone: "+92 370 3301987",
    emergencyPhone: "+92 370 3301987",
    email: "novadentalmultan@gmail.com",
    whatsapp: "+92 370 3301987",
  },
  schedule: [
    { day: "Monday", hours: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", hours: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", hours: "11:00 AM – 10:00 PM" },
    { day: "Thursday", hours: "11:00 AM – 10:00 PM" },
    { day: "Friday", hours: "03:00 PM – 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM – 10:00 PM" },
    { day: "Sunday", hours: "Emergency & On-Call", isEmergencyOnly: true },
  ],
  verifiedStats: [
    { value: 5, suffix: ".0 ★", label: "Google Review Rating", description: "Perfect 5.0 rating across 28+ verified patient reviews on Google Maps." },
    { value: 28, suffix: "+", label: "5-Star Google Reviews", description: "Consistently praised for skilled surgeons, polite doctors, and cooperative team." },
    { value: 2, suffix: "", label: "Certified Specialists", description: "Dr. Ahmad Raza (Owner) & Dr. Farheen Zahra (Demonstrator in BAMDC)." },
    { value: 100, suffix: "%", label: "Patient Satisfaction", description: "Gentle pain-free care for adults and children in a sterile modern environment." },
  ],
  accreditations: [
    "Pakistan Medical & Dental Council (PMDC) Registered Practitioners",
    "Bakhtawar Amin Medical & Dental College (BAMDC) Academic Affiliation",
    "5.0 Star Top-Rated Dental Clinic on Google Maps (Multan)",
    "Digital Smile Design & Advanced Implantology Certified",
  ],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: "dr-ahmad-raza",
    slug: "dr-ahmad-raza",
    name: "Dr. Ahmad Raza",
    title: "Lead Dental Surgeon & Owner",
    qualifications: "BDS, RDS",
    specialization: "Dental Implants, Full Mouth Rehabilitation & Cosmetic Restorations",
    experienceYears: 9,
    bio: "Dr. Ahmad Raza (BDS, RDS) is the founder, owner, and principal clinical surgeon at Nova Dental. With specialized clinical training in surgical implantology, micro-invasive aesthetic restorations, and full mouth rehabilitation, Dr. Ahmad Raza leads the practice with a focus on patient comfort, biological tooth preservation, and state-of-the-art dental technology.",
    philosophy: "Every smile has its own unique biology and character. Our commitment is to deliver world-class dental care with uncompromised clinical ethics, surgical precision, and a gentle touch that puts every patient at ease.",
    education: [
      "BDS (Bachelor of Dental Surgery) — Registered Dental Surgeon (RDS)",
      "Advanced Clinical Fellowship in Surgical Dental Implantology",
      "Certified in Digital Smile Design & Micro-Layered Aesthetics",
      "Continuous Medical Education (CME) in Advanced Prosthodontics",
    ],
    memberships: [
      "Pakistan Medical & Dental Council (PMDC)",
      "Pakistan Dental Association (PDA)",
      "International Association for Dental Research (IADR)",
    ],
    specialties: ["Dental Implants", "Cosmetic Dentistry", "Teeth Whitening", "Surgical Rehabilitation"],
    image: "/images/dr-ahmad-raza.png",
    warmImage: "/images/dr-ahmad-raza.png",
  },
  {
    id: "dr-farheen-zahra",
    slug: "dr-farheen-zahra",
    name: "Dr. Farheen Zahra",
    title: "Dental Specialist & Demonstrator in BAMDC",
    qualifications: "BDS, RDS",
    specialization: "Microscopic Endodontics, Orthodontic Aligners & Restorative Dentistry",
    experienceYears: 8,
    bio: "Dr. Farheen Zahra (BDS, RDS) is an experienced dental specialist at Nova Dental and serves as Demonstrator at Bakhtawar Amin Medical & Dental College (BAMDC). Her clinical expertise spans advanced single-visit root canal treatments, pediatric dental care, orthodontic aligners, and comprehensive oral disease prevention.",
    philosophy: "Preserving natural tooth vitality through meticulous endodontic technique and gentle, anxiety-free care is the cornerstone of great dentistry.",
    education: [
      "BDS (Bachelor of Dental Surgery) — Registered Dental Surgeon (RDS)",
      "Faculty & Demonstrator at Bakhtawar Amin Medical & Dental College (BAMDC)",
      "Post-Graduate Training in Rotary Endodontics & Micro-Dentistry",
      "Certified Clear Aligner Provider",
    ],
    memberships: [
      "Pakistan Medical & Dental Council (PMDC)",
      "Bakhtawar Amin Medical & Dental College Academic Faculty",
      "Pakistan Dental Association (PDA)",
    ],
    specialties: ["Root Canal Treatment", "Braces & Orthodontics", "Dental Cleaning", "Preventive Dentistry"],
    image: "https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=800",
    warmImage: "https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=800",
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    navLabel: "Dental Implants",
    tagline: "Biocompatible titanium and zirconia fixtures anchored directly into alveolar bone.",
    shortDescription: "Permanent tooth replacements that fuse with bone to restore biting force, prevent bone resorption, and support lifelike custom crowns.",
    clinicalExplanation: "A dental implant is a precision-engineered surgical fixture made of medical-grade titanium alloy (Grade 4 or Grade 5) or zirconia ceramic. Placed directly into the jawbone beneath the gingival margin, the fixture undergoes osseointegration—a direct structural and functional connection between living bone and the titanium surface. This creates an unyielding biological anchor for single crowns, multi-unit bridges, or full-arch prostheses without compromising adjacent healthy teeth.",
    whoNeeds: [
      "Patients missing one or more individual teeth due to trauma, decay, or periodontal conditions.",
      "Individuals experiencing progressive alveolar bone shrinkage beneath removable partial or complete dentures.",
      "Patients with failing fixed bridgework requiring replacement without cutting down remaining healthy abutments.",
      "Adults with congenital missing teeth seeking permanent restoration.",
    ],
    benefits: [
      "Arrests alveolar bone resorption by transmitting direct masticatory forces into the jaw.",
      "Restores 95%+ of natural chewing efficiency without movement or adhesive reliance.",
      "Leaves adjacent healthy enamel completely intact—no reduction of sound teeth required.",
      "Documented 98%+ long-term clinical survival rate under regular hygiene maintenance.",
    ],
    indications: [
      { condition: "Single Tooth Loss", explanation: "An isolated titanium fixture topped with a custom zirconia abutment and crown, preserving adjacent teeth." },
      { condition: "Multiple Missing Adjacent Teeth", explanation: "Two or three strategically spaced fixtures supporting a continuous dental bridge." },
      { condition: "Edentulous Dental Arch", explanation: "Full-arch fixed bridge supported on rigidly connected implants." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "3D CBCT Volumetric Assessment & Digital Planning",
        duration: "45 minutes",
        description: "We capture high-resolution Cone Beam Computed Tomography (CBCT) scans and digital optical impressions to map bone density and nerve canals in 3D.",
        clinicalDetails: "A virtual surgical guide is computer-planned with micron-level tolerances, allowing minimally invasive fixture placement.",
      },
      {
        stepNumber: 2,
        title: "Surgical Fixture Placement & Stability Verification",
        duration: "60–90 minutes",
        description: "Under localized anesthesia or conscious sedation, the titanium fixture is placed into the prepared osteotomy by Dr. Ahmad Raza.",
        clinicalDetails: "Primary mechanical stability is verified before placing a protective healing abutment.",
      },
      {
        stepNumber: 3,
        title: "Biological Osseointegration & Tissue Maturation",
        duration: "8–12 weeks",
        description: "Bone cells (osteoblasts) proliferate and mineralize directly against the microrough titanium surface, locking the implant into the skeletal architecture.",
        clinicalDetails: "You wear a discrete provisional restoration while the gingival margin contours naturally around the emergence collar.",
      },
      {
        stepNumber: 4,
        title: "Digital Impression & Final Zirconia Crown Delivery",
        duration: "45 minutes",
        description: "An optical scan captures the precise three-dimensional position of the integrated fixture. Our laboratory crafts an exact monolithic zirconia crown.",
        clinicalDetails: "The final crown is securely placed with a screw-retained mechanism, ensuring hygienic serviceability.",
      },
    ],
    recoveryTimeline: [
      { period: "Day 1 – Day 3", expectedSensations: "Mild local tenderness easily managed with prescribed analgesics.", careProtocol: "Soft foods, cold packs for 15-minute intervals, avoid straws." },
      { period: "Day 4 – Day 14", expectedSensations: "Surgical site tissue settles; discomfort subsides entirely.", careProtocol: "Gentle warm salt water rinses, soft-bristle brushing around the area." },
      { period: "Month 1 – Month 3", expectedSensations: "Zero sensation; implant behaves identically to natural bone and root structure.", careProtocol: "Regular oral hygiene routine; maintain scheduled review." },
    ],
    costTransparency: {
      baseRange: "$2,800 – $4,600 per single fully restored tooth (fixture, custom abutment, and final crown)",
      factors: [
        "Need for localized bone grafting or sinus elevation if bone volume is deficient.",
        "Material selection for the final crown (monolithic zirconia vs. layered porcelain).",
        "Number of fixtures required and surgical guide complexity.",
      ],
      whatIsIncluded: [
        "Complete 3D CBCT imaging and digital treatment simulation",
        "Surgical fixture placement by Dr. Ahmad Raza (Owner)",
        "Custom computer-designed titanium or zirconia abutment",
        "Laboratory-crafted final monolithic zirconia crown",
        "12-month post-placement surgical follow-up care",
      ],
      note: "We provide an itemized, binding written clinical treatment estimate before any procedure is scheduled.",
    },
    beforeAfterCase: {
      category: "Single Anterior Implant",
      clinicalContext: "Patient presented with a fractured upper central incisor. Digital guide placement and monolithic zirconia crown restoration completed by Dr. Ahmad Raza.",
      beforeLabel: "Pre-operative: Fractured Root Structure",
      afterLabel: "Post-operative: Integrated Zirconia Crown",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "12 weeks total treatment time",
    },
    assignedDentistId: "dr-ahmad-raza",
    faqs: [
      {
        question: "Are dental implants permanent?",
        answer: "When placed in sound bone and maintained with proper hygiene, dental implants have a documented clinical survival rate exceeding 95% at 20+ years.",
      },
      {
        question: "Is dental implant surgery painful?",
        answer: "The procedure is performed under precise local anesthesia. Most patients report feeling pressure rather than pain and find the recovery very mild.",
      },
      {
        question: "What if I do not have enough bone for an implant?",
        answer: "We perform localized bone grafting or sinus elevation prior to or during implant placement to recreate the required bone architecture.",
      },
    ],
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    navLabel: "Root Canal",
    tagline: "Microscopic endodontic therapy designed to eradicate pulp infection and preserve natural teeth.",
    shortDescription: "Precision micro-endodontic treatment to remove inflamed or necrotic pulp tissue, sterilize root canals, and relieve severe dental pain.",
    clinicalExplanation: "Root canal treatment is required when the soft inner pulp of a tooth becomes irreversibly inflamed or infected due to deep caries, trauma, or cracks. Using modern rotary endodontic instruments, Dr. Farheen Zahra (BAMDC Demonstrator) meticulously cleans and shapes the complex canal system, eliminates bacterial biofilm, and seals the space with biocompatible gutta-percha.",
    whoNeeds: [
      "Severe throbbing or spontaneous tooth pain that lingers after hot or cold stimulation.",
      "Pain during mastication or when applying direct vertical pressure to a specific tooth.",
      "Localized swelling or tenderness on adjacent gum tissue.",
      "Asymptomatic deep pulpal decay identified via diagnostic X-rays.",
    ],
    benefits: [
      "Immediately relieves acute toothache and periapical inflammation.",
      "Saves your biological natural tooth, maintaining natural chewing proprioception.",
      "Eliminates the need for extraction and bridge replacement.",
      "Over 95% clinical success rate when properly restored.",
    ],
    indications: [
      { condition: "Irreversible Pulpitis", explanation: "Bacterial penetration into the pulp chamber causing persistent neural pain." },
      { condition: "Apical Abscess", explanation: "Infection extending past the root apex into surrounding alveolar bone." },
      { condition: "Dental Trauma / Cracks", explanation: "Fracture lines allowing oral fluid leakage into the inner nerve." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Diagnostic Imaging & Anaesthesia",
        duration: "20 minutes",
        description: "We take digital radiographs and apply local anesthesia to ensure complete numbness.",
        clinicalDetails: "A dental dam isolation barrier is placed to protect the tooth from oral bacteria.",
      },
      {
        stepNumber: 2,
        title: "Canal Debridement & Rotary Shaping",
        duration: "40 minutes",
        description: "Dr. Farheen Zahra gently shapes and cleans the root canals using flexible nickel-titanium rotary files.",
        clinicalDetails: "Canal lengths are electronically measured with high-precision apex locators.",
      },
      {
        stepNumber: 3,
        title: "Ultrasonic Irrigation & Disinfection",
        duration: "20 minutes",
        description: "Canals are chemically disinfected to eradicate residual bacterial pathogens.",
        clinicalDetails: "Antiseptic agents eliminate biofilm without harming periapical tissues.",
      },
      {
        stepNumber: 4,
        title: "Biocompatible Obturation & Seal",
        duration: "30 minutes",
        description: "The sterile canal is hermetically filled with warm gutta-percha and bioceramic sealer.",
        clinicalDetails: "A protective core foundation is placed, followed by a dental crown if indicated.",
      },
    ],
    recoveryTimeline: [
      { period: "Hours 1 – 6", expectedSensations: "Numbness gradually subsides. Mild tender sensation around the gum.", careProtocol: "Avoid chewing until local anesthesia wears off completely." },
      { period: "Day 1 – Day 3", expectedSensations: "Mild sensitivity to biting pressure, responds well to standard ibuprofen.", careProtocol: "Normal gentle brushing; avoid very hard foods." },
      { period: "Week 1 onward", expectedSensations: "Full normal function. The tooth feels quiet and natural.", careProtocol: "Proceed with permanent crown placement within 2–4 weeks." },
    ],
    costTransparency: {
      baseRange: "$1,100 – $1,850 depending on tooth position and canal anatomy",
      factors: [
        "Anatomical complexity (anterior single-canal vs. multi-rooted molar with 4 canals).",
        "Primary root canal treatment vs. retreatment.",
      ],
      whatIsIncluded: [
        "Pre-operative diagnostic testing and digital X-rays",
        "Rotary endodontic shaping and 3D obturation by Dr. Farheen Zahra",
        "All digital radiographic verification films",
        "Bonded protective coronal provisional seal",
      ],
      note: "Full protective ceramic crowns are itemized separately.",
    },
    beforeAfterCase: {
      category: "Periapical Healing",
      clinicalContext: "Patient presented with acute periapical throbbing pain. Single-visit root canal therapy performed by Dr. Farheen Zahra.",
      beforeLabel: "Pre-treatment: Active Apical Lesion",
      afterLabel: "Post-treatment: Complete Bone Healing",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "1 visit procedure",
    },
    assignedDentistId: "dr-farheen-zahra",
    faqs: [
      {
        question: "Does root canal treatment hurt?",
        answer: "No. With localized modern anesthetics, a root canal feels very similar to having a routine filling placed.",
      },
      {
        question: "How long does a root canal procedure take?",
        answer: "Most root canal treatments at Nova Dental are completed in a single 60- to 80-minute visit.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    navLabel: "Teeth Whitening",
    tagline: "Prescription carbamide and hydrogen peroxide enamel brightening with zero thermal damage.",
    shortDescription: "Clinically monitored in-chair and customized home whitening systems that dissolve deep enamel chromogens safely without weakening enamel structure.",
    clinicalExplanation: "Professional teeth whitening utilizes stabilized hydrogen peroxide or carbamide peroxide gel formulations. Under clinical supervision by Dr. Ahmad Raza, active oxygen molecules lift stains caused by coffee, tea, and aging without altering enamel mineral density.",
    whoNeeds: [
      "Adults experiencing yellowing or darkening of teeth due to diet or aging.",
      "Patients preparing for aesthetic porcelain restorations wanting a brighter baseline.",
      "Individuals seeking safe, supervised whitening with desensitizing protocols.",
    ],
    benefits: [
      "Lifts enamel 4 to 8 Vita shades in a single 60-minute in-chair session.",
      "Formulated with desensitizers to prevent thermal sensitivity.",
      "Custom precision trays protect gum margins.",
    ],
    indications: [
      { condition: "Extrinsic Surface Staining", explanation: "Darkening caused by dietary chromogens and beverages." },
      { condition: "Age-Related Yellowing", explanation: "Natural thinning of translucent enamel revealing secondary dentin." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Clinical Shade Mapping & Baseline",
        duration: "20 minutes",
        description: "We record baseline shade measurements against the standardized Vita guide.",
        clinicalDetails: "Enamel thickness and restoration margins are checked.",
      },
      {
        stepNumber: 2,
        title: "Gingival Barrier Application",
        duration: "15 minutes",
        description: "A protective light-cured resin barrier is placed along the gumline.",
        clinicalDetails: "Soft tissues are isolated to prevent any gel contact.",
      },
      {
        stepNumber: 3,
        title: "Prescription Gel Application",
        duration: "3 x 15-minute cycles",
        description: "Medical-grade whitening gel is applied to enamel surfaces in 15-minute intervals.",
        clinicalDetails: "Oxygen radicals safely dissolve organic stain macromolecules.",
      },
      {
        stepNumber: 4,
        title: "Remineralization & Home Protocol",
        duration: "15 minutes",
        description: "Gel is rinsed away and a remineralizing desensitizing varnish is applied.",
        clinicalDetails: "Custom take-home touch-up trays are provided.",
      },
    ],
    recoveryTimeline: [
      { period: "First 24 Hours", expectedSensations: "Slight transient sensitivity to cold drinks.", careProtocol: "Avoid dark coffee, tea, or dark sauces for 48 hours." },
      { period: "Day 2 – Day 7", expectedSensations: "Shade settles to peak brilliance; zero sensitivity.", careProtocol: "Normal brushing routine." },
    ],
    costTransparency: {
      baseRange: "$450 (take-home system) to $750 (complete in-chair session + custom kit)",
      factors: ["In-chair power whitening vs. custom tray system."],
      whatIsIncluded: [
        "Comprehensive enamel baseline assessment",
        "Full in-office treatment with gingival barrier protection",
        "Custom laboratory upper & lower trays with touch-up gel",
      ],
      note: "Existing crowns and ceramic fillings do not change color with whitening.",
    },
    beforeAfterCase: {
      category: "Enamel Rejuvenation",
      clinicalContext: "Patient presenting with chromatic discoloration from tea. Single session achieved radiant Vita B1 shade.",
      beforeLabel: "Pre-treatment: Vita Shade A3.5",
      afterLabel: "Post-treatment: Vita Shade B1",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "1 appointment (60 minutes)",
    },
    assignedDentistId: "dr-ahmad-raza",
    faqs: [
      { question: "How long do results last?", answer: "Typically 12 to 24 months, maintained with custom touch-up trays." },
      { question: "Does whitening damage enamel?", answer: "No, prescription whitening under clinical supervision does not weaken or etch enamel." },
    ],
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning & Periodontal Care",
    navLabel: "Dental Cleaning",
    tagline: "Air-polishing, ultrasonic scaling, and periodontal health preservation.",
    shortDescription: "Therapeutic hygiene visits utilizing piezoelectric ultrasonic scaling and glycine powder airflow to eliminate subgingival biofilm and protect alveolar support.",
    clinicalExplanation: "Professional cleaning removes plaque and hardened calculus from tooth surfaces. Under the guidance of Dr. Farheen Zahra, ultrasonic tips and warm glycine powder airflow safely clean beneath the gumline to prevent gingivitis and periodontal bone loss.",
    whoNeeds: [
      "Every individual every 6 months for preventive maintenance.",
      "Patients noticing bleeding gums or persistent bad breath.",
      "Individuals with subgingival tartar buildup requiring deep scaling.",
    ],
    benefits: [
      "Arrests gum bleeding and prevents periodontal disease.",
      "Eliminates bad breath caused by subgingival bacteria.",
      "Gently removes extrinsic stains without scratching enamel.",
    ],
    indications: [
      { condition: "Routine Prophylaxis", explanation: "Preventive scaling and airflow cleaning for healthy teeth." },
      { condition: "Gingivitis Therapy", explanation: "Reversing gum inflammation through thorough plaque disruption." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Periodontal Charting & Assessment",
        duration: "15 minutes",
        description: "We evaluate pocket depths and tissue health.",
        clinicalDetails: "Baseline periodontal scores are recorded.",
      },
      {
        stepNumber: 2,
        title: "Piezoelectric Ultrasonic Scaling",
        duration: "25 minutes",
        description: "Gentle high-frequency micro-oscillations remove calculus without discomfort.",
        clinicalDetails: "Warm water irrigation keeps tooth surfaces comfortable.",
      },
      {
        stepNumber: 3,
        title: "Glycine Airflow Polishing",
        duration: "15 minutes",
        description: "Warm air, water, and glycine powder clean deep into pits and margins.",
        clinicalDetails: "Non-abrasive powder safely polishes natural enamel and restorations.",
      },
      {
        stepNumber: 4,
        title: "Fluoride Mineralization",
        duration: "10 minutes",
        description: "Protective remineralizing varnish is applied to strengthen enamel.",
        clinicalDetails: "Personalized home oral care tips are reviewed.",
      },
    ],
    recoveryTimeline: [
      { period: "First 2 Hours", expectedSensations: "Teeth feel completely clean and smooth.", careProtocol: "Avoid hot drinks for 30 minutes while fluoride sets." },
      { period: "Day 1 onward", expectedSensations: "Healthy gum tissue with zero bleeding.", careProtocol: "Daily gentle brushing and flossing." },
    ],
    costTransparency: {
      baseRange: "$180 – $320 for standard prophylaxis",
      factors: ["Routine preventive cleaning vs. deep periodontal scaling."],
      whatIsIncluded: [
        "Complete periodontal assessment",
        "Ultrasonic scaling and glycine airflow polishing",
        "Remineralizing mineral varnish",
      ],
      note: "Routine cleanings are usually covered by dental insurance.",
    },
    beforeAfterCase: {
      category: "Gingival Health",
      clinicalContext: "Patient with moderate gingivitis restored to healthy stippled gum contours by Dr. Farheen Zahra.",
      beforeLabel: "Pre-treatment: Heavy Tartar & Bleeding",
      afterLabel: "Post-treatment: Healthy Pink Gum Margin",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "1 visit procedure",
    },
    assignedDentistId: "dr-farheen-zahra",
    faqs: [
      { question: "How often should I get my teeth cleaned?", answer: "Every 6 months for most patients, or every 3 to 4 months for periodontal maintenance." },
      { question: "Is cleaning painful?", answer: "Our warm water piezoelectric airflow technology ensures cleanings are comfortable and gentle." },
    ],
  },
  {
    slug: "braces",
    name: "Braces & Clear Aligners",
    navLabel: "Braces & Orthodontics",
    tagline: "Digitally planned orthodontic tooth movement with ceramic brackets and clear aligners.",
    shortDescription: "Comprehensive orthodontic care utilizing modern low-friction ceramic brackets and custom clear aligners to correct malocclusion, crowding, and airway balance.",
    clinicalExplanation: "Orthodontic treatment applies continuous, biologically controlled light forces to move teeth into ideal alignment. Dr. Farheen Zahra designs custom 3D clear aligner trajectories and aesthetic ceramic brackets to balance your smile arc and bite function.",
    whoNeeds: [
      "Moderate to severe dental crowding, overlap, or gaps.",
      "Malocclusion including deep overbite, crossbite, or underbite.",
      "Adults wanting discreet, nearly invisible clear aligners.",
    ],
    benefits: [
      "Alleviates uneven chewing stress, protecting teeth from chipping.",
      "Eliminates tight overlapping areas where plaque gets trapped.",
      "Creates natural facial balance and a confident smile arc.",
    ],
    indications: [
      { condition: "Dental Crowding", explanation: "Overlapping teeth aligned with clear aligners or discrete brackets." },
      { condition: "Spacing & Diastemas", explanation: "Closing unwanted gaps with gentle physiological force." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "3D Digital Orthodontic Scanning",
        duration: "45 minutes",
        description: "We record a full digital 3D intraoral scan and facial photos.",
        clinicalDetails: "A digital tooth movement simulation is produced.",
      },
      {
        stepNumber: 2,
        title: "Aligner Delivery or Bracket Placement",
        duration: "60 minutes",
        description: "Your custom aligners are fitted or translucent ceramic brackets are bonded.",
        clinicalDetails: "Gentle initial leveling force is established.",
      },
      {
        stepNumber: 3,
        title: "Progressive Alignment Reviews",
        duration: "Every 6–8 weeks",
        description: "We monitor tooth movement and advance aligner stages.",
        clinicalDetails: "Torque and bite contact are refined.",
      },
      {
        stepNumber: 4,
        title: "Retention Delivery",
        duration: "45 minutes",
        description: "Custom night retainers are delivered to hold teeth securely in their ideal positions.",
        clinicalDetails: "Long-term stability is protected.",
      },
    ],
    recoveryTimeline: [
      { period: "Week 1", expectedSensations: "Slight tightness as teeth begin gentle movement.", careProtocol: "Soft foods; wear aligners 20–22 hours daily." },
      { period: "Month 2 – Month 14", expectedSensations: "Comfortable, steady alignment progress.", careProtocol: "Maintain daily flossing and regular reviews." },
    ],
    costTransparency: {
      baseRange: "$4,200 – $6,800 for comprehensive orthodontic treatment",
      factors: ["Clear aligners vs. translucent ceramic brackets vs. duration."],
      whatIsIncluded: [
        "Complete 3D intraoral scans and movement simulation",
        "All aligner sets or bracket adjustment visits",
        "Debonding and initial set of custom retainers",
      ],
      note: "Flexible monthly installment plans available.",
    },
    beforeAfterCase: {
      category: "Crowding Correction",
      clinicalContext: "Adult patient presenting with severe upper anterior crowding treated with clear aligners by Dr. Farheen Zahra.",
      beforeLabel: "Pre-treatment: Severe Anterior Crowding",
      afterLabel: "Post-treatment: Broad Balanced Smile Arc",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "14 months active treatment",
    },
    assignedDentistId: "dr-farheen-zahra",
    faqs: [
      { question: "How long does treatment take?", answer: "Typically 10 to 18 months depending on case complexity." },
      { question: "Can adults get clear aligners?", answer: "Yes! Over 40% of our orthodontic patients are adults." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Smile Design",
    navLabel: "Cosmetic Dentistry",
    tagline: "Minimally invasive porcelain veneers, composite artistry, and digital smile design.",
    shortDescription: "Individualized esthetic restorations tailored to facial symmetry, lip dynamics, and natural tooth optical properties using hand-layered ceramics.",
    clinicalExplanation: "Cosmetic dentistry at Nova Dental combines Digital Smile Design with ultra-conservative porcelain veneers and composite bonding. Led by Dr. Ahmad Raza (Owner), each restoration is handcrafted with micro-thin ceramics that replicate natural enamel translucency and surface texture.",
    whoNeeds: [
      "Teeth with chipped, worn, or uneven edges.",
      "Persistent discoloration that does not respond to bleaching.",
      "Unwanted gaps or asymmetrical tooth proportions.",
    ],
    benefits: [
      "Micro-thin preparation (0.3mm–0.5mm) preserving 90%+ natural enamel.",
      "Handcrafted porcelain mimics natural light reflection and luster.",
      "Stain-resistant ceramics last 15+ years with proper care.",
    ],
    indications: [
      { condition: "Porcelain Veneers", explanation: "Custom ceramic shells bonded to facial enamel." },
      { condition: "Composite Bonding", explanation: "Sculpted chairside resin for minor chip repair." },
      { condition: "Smile Makeover", explanation: "Complete harmony combining veneers and whitening." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Digital Smile Design & Trial Mock-Up",
        duration: "45 minutes",
        description: "We analyze facial proportions and create a reversible intraoral trial mock-up.",
        clinicalDetails: "You preview your final smile before any tooth preparation.",
      },
      {
        stepNumber: 2,
        title: "Micro-Enamel Smoothing & Digital Scan",
        duration: "90 minutes",
        description: "Dr. Ahmad Raza performs conservative enamel preparation within enamel boundaries.",
        clinicalDetails: "High-resolution optical scans capture precision margins.",
      },
      {
        stepNumber: 3,
        title: "Master Ceramic Layering",
        duration: "Laboratory Phase",
        description: "Ceramic layers are custom shaded with natural incisal translucency.",
        clinicalDetails: "Custom glazed for lifelike aesthetics.",
      },
      {
        stepNumber: 4,
        title: "Adhesive Ceramic Bonding",
        duration: "90 minutes",
        description: "Veneers are bonded with dual-cure resin under total isolation.",
        clinicalDetails: "Final polish creates seamless margins.",
      },
    ],
    recoveryTimeline: [
      { period: "First 24 Hours", expectedSensations: "Slight gum tenderness from isolation.", careProtocol: "Rinse with warm salt water; soft foods." },
      { period: "Long-Term", expectedSensations: "Feels and functions just like natural, flawless enamel.", careProtocol: "Brush and floss normally." },
    ],
    costTransparency: {
      baseRange: "$1,400 – $2,400 per tooth for porcelain veneers",
      factors: ["Number of teeth involved and ceramic material selected."],
      whatIsIncluded: [
        "Digital Smile Design simulation & trial mock-up",
        "Micro-preparation and provisional restorations by Dr. Ahmad Raza",
        "Master laboratory ceramic fabrication and adhesive bonding",
      ],
      note: "Trial mock-ups let you approve the outcome before treatment begins.",
    },
    beforeAfterCase: {
      category: "Porcelain Veneer Smile Design",
      clinicalContext: "Patient restored with handcrafted porcelain veneers by Dr. Ahmad Raza (Owner).",
      beforeLabel: "Pre-treatment: Worn & Discolored Enamel",
      afterLabel: "Post-treatment: Handcrafted Porcelain Veneers",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "2 clinical visits",
    },
    assignedDentistId: "dr-ahmad-raza",
    faqs: [
      { question: "How long do porcelain veneers last?", answer: "Typically 15 to 20+ years when properly maintained." },
      { question: "Will veneers look artificial?", answer: "No, we customize translucency and gradients so they look completely natural." },
    ],
  },
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: "Immediate (0–2 hours)" | "Same-Day (2–6 hours)" | "Urgent (Within 24 hours)";
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {
    id: "severe-toothache",
    title: "Severe Unrelenting Toothache / Pulpitis",
    urgency: "Same-Day (2–6 hours)",
    symptoms: [
      "Severe throbbing or pulsating pain keeping you awake at night",
      "Sharp pain radiating to ear, jaw, or temple",
      "Extreme sensitivity to warm liquids",
    ],
    immediateAction: [
      "Take recommended analgesics if medically permitted.",
      "Rinse gently with warm salt water.",
      "Apply a cold compress externally to cheek.",
    ],
    clinicTreatment: "Rapid vitality testing, profound local anesthesia, and pulpal debridement to stop pain immediately.",
  },
  {
    id: "knocked-out-tooth",
    title: "Knocked-Out (Avulsed) Permanent Tooth",
    urgency: "Immediate (0–2 hours)",
    symptoms: [
      "Complete dislodgement of tooth from socket following trauma",
      "Active bleeding from socket",
    ],
    immediateAction: [
      "Handle the tooth ONLY by the crown. Never touch the root.",
      "Rinse gently for 5 seconds in cold milk or saline if dirty.",
      "Store in whole milk or saliva and arrive at our clinic within 60 minutes.",
    ],
    clinicTreatment: "Immediate surgical reimplantation and flexible periodontal splinting.",
  },
  {
    id: "broken-fractured-tooth",
    title: "Broken, Cracked, or Fractured Tooth",
    urgency: "Same-Day (2–6 hours)",
    symptoms: [
      "Visible broken tooth with sharp edges",
      "Sharp pain when chewing or releasing pressure",
    ],
    immediateAction: [
      "Collect any broken tooth fragments in water or milk.",
      "Cover sharp edges with orthodontic wax or sugar-free gum.",
      "Avoid eating on that side.",
    ],
    clinicTreatment: "Microscopic evaluation and same-day composite or crown stabilization.",
  },
  {
    id: "dental-abscess",
    title: "Acute Dental Abscess & Swelling",
    urgency: "Immediate (0–2 hours)",
    symptoms: [
      "Visible swelling of cheek, jaw, or gum",
      "Fever or foul taste in mouth",
    ],
    immediateAction: [
      "Call our emergency hotline immediately.",
      "Use cold compress only; do NOT apply heat.",
      "Keep head elevated.",
    ],
    clinicTreatment: "Emergency incision and drainage, canal decompression, and targeted antibiotic therapy.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    faqs?: { question: string; answer: string }[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-osseointegration-dental-implants",
    title: "The Biological Science of Osseointegration in Modern Dental Implants",
    category: "Dental Implants",
    readTime: "6 min read",
    publishDate: "2024-03-12",
    lastUpdated: "2024-08-15",
    authorId: "dr-ahmad-raza",
    excerpt: "How medical-grade titanium fuses directly with alveolar bone on a cellular level, and what clinical factors determine lifelong stability.",
    leadImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "dental-implants",
    content: {
      intro: "Osseointegration represents one of modern medicine's most predictable surgical interventions. Under Dr. Ahmad Raza's clinical protocols, dental implants achieve direct bone fusion for decades of masticatory stability.",
      sections: [
        {
          heading: "The Cellular Mechanics of Titanium-Bone Integration",
          body: "Within hours of placing a titanium implant fixture into an osteotomy, osteoblasts migrate onto the microrough surface, depositing a mineralized bone matrix over 8 to 12 weeks.",
        },
        {
          heading: "Key Factors Governing 20-Year Implant Longevity",
          body: "Long-term implant survival depends on adequate residual bone volume, precise digital surgical guide placement, and daily plaque biofilm control along the mucosal emergence collar.",
        },
      ],
      faqs: [
        { question: "Can a dental implant fail?", answer: "Implant success exceeds 98% with proper surgical planning and regular hygiene maintenance." },
      ],
    },
  },
  {
    slug: "microscopic-endodontics-vs-tooth-extraction",
    title: "Saving the Natural Root: Modern Endodontics Explained",
    category: "Root Canal",
    readTime: "5 min read",
    publishDate: "2024-04-04",
    lastUpdated: "2024-07-22",
    authorId: "dr-farheen-zahra",
    excerpt: "Why retaining your biological tooth root outperforms synthetic replacements, and how precision endodontics eradicates infection.",
    leadImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "root-canal",
    content: {
      intro: "Preserving your natural tooth root maintains the periodontal ligament—a microscopic sensory organ providing chewing proprioception. Dr. Farheen Zahra specializes in gentle root canal therapy.",
      sections: [
        {
          heading: "The Value of Rotary Instrumentation",
          body: "Flexible nickel-titanium instruments clean complex root anatomy to the exact apex with microscopic precision.",
        },
        {
          heading: "Bioceramic 3D Canal Obturation",
          body: "Modern bioceramic sealers are biocompatible and create a permanent hermetic barrier preventing reinfection.",
        },
      ],
      faqs: [
        { question: "How long can a root-canal-treated tooth last?", answer: "With a high-quality crown and regular brushing, it can function for a lifetime." },
      ],
    },
  },
  {
    slug: "clear-aligner-biomechanics-for-adults",
    title: "Clear Aligner Biomechanics: Modern Invisible Orthodontics",
    category: "Braces & Orthodontics",
    readTime: "7 min read",
    publishDate: "2024-05-18",
    lastUpdated: "2024-09-02",
    authorId: "dr-farheen-zahra",
    excerpt: "How clear aligners apply precise rotational and torque forces to straighten teeth discreetly and comfortably.",
    leadImage: "https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "braces",
    content: {
      intro: "Clear aligner therapy allows adults and teens to correct crowding and spacing without metal wires or food restrictions.",
      sections: [
        {
          heading: "Custom 3D Digital Trajectory",
          body: "Each aligner stage moves teeth incrementally by 0.25mm under gentle, controlled biological force.",
        },
      ],
    },
  },
  {
    slug: "minimally-invasive-veneers-enamel-preservation",
    title: "Minimally Invasive Veneers: Enamel Preservation as the Gold Standard",
    category: "Cosmetic Dentistry",
    readTime: "5 min read",
    publishDate: "2024-06-10",
    lastUpdated: "2024-08-30",
    authorId: "dr-ahmad-raza",
    excerpt: "Understanding the biological advantage of 0.3mm micro-enamel preparation for long-lasting porcelain veneers.",
    leadImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "cosmetic-dentistry",
    content: {
      intro: "Dr. Ahmad Raza advocates for ultra-conservative dentistry: preserving 90%+ of your natural tooth structure while achieving radiant smile aesthetics.",
      sections: [
        {
          heading: "The Strength of Enamel Bonding",
          body: "Porcelain veneers bonded to enamel achieve high adhesive shear strength exceeding 30 MPa, lasting 15 to 20 years.",
        },
      ],
    },
  },
];

export const PATIENT_REVIEWS = [
  {
    id: "review-1",
    author: "Gohar Rehman Sheikh",
    treatment: "Pediatric & Gentle Dental Care",
    quote: "I visited Nova Dental Multan for my 5-year-old nephew’s treatment. The doctor was very kind and handled the child with great care. The staff was also friendly and cooperative.",
    year: "Google Review ★★★★★",
  },
  {
    id: "review-2",
    author: "Farheen Zahra",
    treatment: "Quality Dental Care & Smile Aesthetics",
    quote: "Nova Dental Clinic truly stands out for its professionalism and patient care! The doctors are highly skilled, friendly. Highly recommended for anyone looking for quality dental care and a beautiful smile!",
    year: "Google Review ★★★★★",
  },
  {
    id: "review-3",
    author: "hemmy Khan",
    treatment: "Comprehensive Dental Care & Consultation",
    quote: "From consultation to treatment, everything was handled with perfection. Excellent dental care, also a wonderful human being who truly cares about patients. I would gladly recommend this clinic to everyone.",
    year: "Google Review ★★★★★",
  },
  {
    id: "review-4",
    author: "Verified Patient",
    treatment: "Dental Implants & Restorations",
    quote: "Outstanding cooperative and skilled team. Polite doctors, pain-free treatment and modern sterile clinic right opposite Mall of Multan.",
    year: "Google Review ★★★★★",
  },
];
