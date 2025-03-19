const questions = [
    {
        question: "Which ion is primarily responsible for the resting membrane potential?",
        answers: [
            { text: "Potassium", correct: true },
            { text: "Sodium", correct: false },
            { text: "Chloride", correct: false },
            { text: "Calcium", correct: false }
        ]
    },
    {
        question: "Which organ controls the release of andtidiuretic hormone (ADH)?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Kidney", correct: false },
            { text: "Pituitary gland", correct: true },
            { text: "Pancreas", correct: false }
        ]
    },
    {
        question: "What is the normal pH range of a human blood?",
        answers: [
            { text: "6.8 - 7.0", correct: false },
            { text: "7.35 - 7.45", correct: true },
            { text: "7.8 - 8.0", correct: false },
            { text: "6.0 -6.5", correct: false }
        ]
    },
    {
        question: "Which neurotransmitter is primarily responsible for skeletal muscle contraction?",
        answers: [
            { text: "Dopamine", correct: false },
            { text: "Serotonin", correct: false },
            { text: "Acetylcholine", correct: true },
            { text: "GABA", correct: false }
        ]
    },
    {
        question: "What is the main function of hemoglobin?",
        answers: [
            { text: "Transporting oxygen", correct: true },
            { text: "Producing white blood", correct: false },
            { text: "Storing glucose", correct: false },
            { text: "Digesting proteins", correct: false }
        ]
    },
    {
        question: "Which bone is the longest in the human body?",
        answers: [
            { text: "Humerus", correct: false },
            { text: "Tibia", correct: false },
            { text: "Radius", correct: false },
            { text: "Femur", correct: true }
        ]
    },
    {
        question: "Which organ is responsible for the production of bile?",
        answers: [
            { text: "Liver", correct: true },
            { text: "Stomach", correct: false },
            { text: "Pancreas", correct: false },
            { text: "Gallbladder", correct: false }
        ]
    },
    {
        question: "How many pairs of ribs does the human body typically have?",
        answers: [
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "What is the name of the first cervical vertebra?",
        answers: [
            { text: "Atlas", correct: true },
            { text: "Axis", correct: false },
            { text: "C3", correct: false },
            { text: "Occipital", correct: false }
        ]
    },
    {
        question: "Which part of the brain controls balance and coordination?",
        answers: [
            { text: "Cerebrum", correct: false },
            { text: "Cerebellum", correct: true },
            { text: "Brainstem", correct: false },
            { text: "Hypothalamus", correct: false }
        ]
    },
    {
        question: "Which enzyme is responsible for DNA replication?",
        answers: [
            { text: "DNA polymerase", correct: true },
            { text: "RNA polymerase", correct: false },
            { text: "Ligase", correct: false },
            { text: "Helicase", correct: false }
        ]
    },
    {
        question: "What is the primary energy currency of the cell?",
        answers: [
            { text: "NADH", correct: false },
            { text: "FADH2", correct: false },
            { text: "ATP", correct: true },
            { text: "GTP", correct: false }
        ]
    },
    {
        question: "Which vitamin is essential for blood clotting?",
        answers: [
            { text: "Vitamin K", correct: true },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: false },
            { text: "Vitamin B12", correct: false }
        ]
    },
    {
        question: "Which amino acid contains sulfur?",
        answers: [
            { text: "Glycine", correct: false },
            { text: "Leucine", correct: false },
            { text: "Methionine", correct: true },
            { text: "Arginine", correct: false }
        ]
    },
    {
        question: "Which hormone is synthesized from cholesterol?",
        answers: [
            { text: "Cortisol", correct: true },
            { text: "Insulin", correct: false },
            { text: "Glucagon", correct: false },
            { text: "Epinephrine", correct: false }
        ]
    },
    {
        question: "Which enzyme catalyzes the first step in glycolysis?",
        answers: [
            { text: "Hexokinase", correct: true },
            { text: "Phosphofructokinase", correct: false },
            { text: "Pyruvate kinase", correct: false },
            { text: "Aldolase", correct: false }
        ]
    },
    {
        question: "Which molecule serves as the final electron acceptor in the electron transport chain?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "NADH", correct: false },
            { text: "Oxygen", correct: true },
            { text: "FADH2", correct: false }
        ]
    },
    {
        question: "Which amino acid is the precursor for serotonin synthesis?",
        answers: [
            { text: "Tyrosine", correct: false },
            { text: "Glutamine", correct: false },
            { text: "Cysteine", correct: false },
            { text: "Tryptophan", correct: true }
        ]
    },
    {
        question: "Which vitamin is essential for collagen synthesis?",
        answers: [
            { text: "Vitamin D", correct: false },
            { text: "Vitamin B12", correct: false },
            { text: "Vitamin K", correct: false },
            { text: "Vitamin C", correct: true }
        ]
    },
    {
        question: "What is the primary function of cholesterol in cell membranes?",
        answers: [
            { text: "Generate ATP", correct: false },
            { text: "Act as an enzyme", correct: false },
            { text: "Facilitate glucose transport", correct: false },
            { text: "Maintain membrane fluidity", correct: true }
        ]
    },
    {
        question: "Which artery supplies the brain with oxygenated blood?",
        answers: [
            { text: "Carotid artery", correct: true },
            { text: "Coronary artery", correct: false },
            { text: "Femoral artery", correct: false },
            { text: "Subclavian artery", correct: false }
        ]
    },
    {
        question: "Which structure connects muscles to bones?",
        answers: [
            { text: "Tendon", correct: true },
            { text: "Ligament", correct: false },
            { text: "Cartilage", correct: false },
            { text: "Fascia", correct: false }
        ]
    },
    {
        question: "How many bones are in the adult human body?",
        answers: [
            { text: "200", correct: false },
            { text: "206", correct: true },
            { text: "215", correct: false },
            { text: "190", correct: false }
        ]
    },
    {
        question: "Which organ is located in the left hypochondriac region?",
        answers: [
            { text: "Spleen", correct: true },
            { text: "Liver", correct: false },
            { text: "Pancreas", correct: false },
            { text: "Appendix", correct: false }
        ]
    },
    {
        question: "Which part of the digestive tract absorbs the most nutrients?",
        answers: [
            { text: "Stomach", correct: false },
            { text: "Colon", correct: false },
            { text: "Small intestine", correct: true },
            { text: "Esophagus", correct: false }
        ]
    },
    {
        question: "Which part of the nephron is responsible for filtration?",
        answers: [
            { text: "Loop of Henle", correct: false },
            { text: "Collecting duct", correct: false },
            { text: "Glomerulus", correct: true },
            { text: "Proximal tubule", correct: false }
        ]
    },
    {
        question: "What is the primary function of the sinoatrial (SA) node?",
        answers: [
            { text: "Regulate blood pressure", correct: false },
            { text: "Stimulate hormone release", correct: false },
            { text: "Control lung ventilation", correct: false },
            { text: "Act as the heart’s pacemaker", correct: true }
        ]
    },
    {
        question: "Which organ produces erythropoietin?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Spleen", correct: false },
            { text: "Bone marrow", correct: false },
            { text: "Kidney", correct: true }
        ]
    },
    {
        question: "Which neurotransmitter is primarily inhibitory in the CNS?",
        answers: [
            { text: "Glutamate", correct: false },
            { text: "Dopamine", correct: false },
            { text: "Acetylcholine", correct: false },
            { text: "GABA", correct: true }
        ]
    },
    {
        question: "What is the primary role of surfactant in the lungs?",
        answers: [
            { text: "Decrease alveolar surface tension", correct: true },
            { text: "Increase alveolar surface tension", correct: false },
            { text: "Enhance oxygen diffusion", correct: false },
            { text: "Stimulate mucus secretion", correct: false }
        ]
    },
    {
        question: "Which bone is commonly known as the collarbone?",
        answers: [
            { text: "Scapula", correct: false },
            { text: "Sternum", correct: false },
            { text: "Clavicle", correct: true },
            { text: "Humerus", correct: false }
        ]
    },
    {
        question: "Which muscle is responsible for flexing the forearm at the elbow?",
        answers: [
            { text: "Biceps brachii", correct: true },
            { text: "Triceps brachii", correct: false },
            { text: "Brachioradialis", correct: false },
            { text: "Deltoid", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Brain", correct: false },
            { text: "Skin", correct: true },
            { text: "Heart", correct: false }
        ]
    },
    {
        question: "Which chamber of the heart receives oxygenated blood from the lungs?",
        answers: [
            { text: "Left atrium", correct: true },
            { text: "Right atrium", correct: false },
            { text: "Left ventricle", correct: false },
            { text: "Right ventricle", correct: false }
        ]
    },
    {
        question: "Which cranial nerve is responsible for vision?",
        answers: [
            { text: "Optic nerve (CN II)", correct: true },
            { text: "Olfactory nerve (CN I)", correct: false },
            { text: "Oculomotor nerve (CN III)", correct: false },
            { text: "Trigeminal nerve (CN V)", correct: false }
        ]
    },
    {
        question: "Which structure prevents food from entering the trachea during swallowing?",
        answers: [
            { text: "Larynx", correct: false },
            { text: "Pharynx", correct: false },
            { text: "Epiglottis", correct: true },
            { text: "Esophagus", correct: false }
        ]
    },
    {
        question: "The femoral artery is a direct continuation of which artery?",
        answers: [
            { text: "Internal iliac artery", correct: false },
            { text: "Aorta", correct: false },
            { text: "External iliac artery", correct: true },
            { text: "Popliteal artery", correct: false }
        ]
    },
    {
        question: "Which part of the brain is responsible for coordinating voluntary movements?",
        answers: [
            { text: "Cerebrum", correct: false },
            { text: "Brainstem", correct: false },
            { text: "Cerebellum", correct: true },
            { text: "Thalamus", correct: false }
        ]
    },
    {
        question: "Which structure in the kidney is responsible for filtering blood?",
        answers: [
            { text: "Glomerulus", correct: true },
            { text: "Nephron", correct: false },
            { text: "Loop of Henle", correct: false },
            { text: "Collecting duct", correct: false }
        ]
    },
    {
        question: "Which bone is part of both the axial and appendicular skeleton?",
        answers: [
            { text: "Clavicle", correct: false },
            { text: "Sternum", correct: false },
            { text: "Scapula", correct: true },
            { text: "Pelvis", correct: false }
        ]
    },
    {
        question: "What is the largest artery in the human body?",
        answers: [
            { text: "Carotid artery", correct: false },
            { text: "Femoral artery", correct: false },
            { text: "Pulmonary artery", correct: false },
            { text: "Aorta", correct: true }
        ]
    },
    {
        question: "Which joint is an example of a hinge joint?",
        answers: [
            { text: "Shoulder joint", correct: false },
            { text: "Hip joint", correct: false },
            { text: "Elbow joint", correct: true },
            { text: "Wrist joint", correct: false }
        ]
    },
    {
        question: "Which organ stores bile?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Pancreas", correct: false },
            { text: "Spleen", correct: false },
            { text: "Gallbladder", correct: true }
        ]
    },
    {
        question: "Which structure forms the outermost layer of the skin?",
        answers: [
            { text: "Dermis", correct: false },
            { text: "Hypodermis", correct: false },
            { text: "Subcutaneous layer", correct: false },
            { text: "Epidermis", correct: true }
        ]
    },
    {
        question: "What is the main function of the diaphragm?",
        answers: [
            { text: "Aids in digestion", correct: false },
            { text: "Pumps blood", correct: false },
            { text: "Regulates body temperature", correct: false },
            { text: "Assists in respiration", correct: true },
        ]
    },
    {
        question: "Which bone houses the pituitary gland?",
        answers: [
            { text: "Sphenoid bone", correct: true },
            { text: "Frontal bone", correct: false },
            { text: "Occipital bone", correct: false },
            { text: "Parietal bone", correct: false }

        ]
    },
    {
        question: "Which part of the intestine absorbs the most water?",
        answers: [
            { text: "Small intestine", correct: false },
            { text: "Duodenum", correct: false },
            { text: "Jejunum", correct: false },
            { text: "Large intestine", correct: true },
        ]
    },
    {
        question: "Which muscle is primarily responsible for inspiration?",
        answers: [
            { text: "External intercostal muscles", correct: false },
            { text: "Internal intercostal muscles", correct: false },
            { text: "Diaphragm", correct: true },
            { text: "Rectus abdominis", correct: false }
        ]
    },
    {
        question: "Which cranial nerve controls facial expressions?",
        answers: [
            { text: "Trigeminal nerve (CN V)", correct: false },
            { text: "Vagus nerve (CN X)", correct: false },
            { text: "Facial nerve (CN VII)", correct: true },
            { text: "Accessory nerve (CN XI)", correct: false }
        ]
    },
    {
        question: "Which structure is responsible for producing cerebrospinal fluid (CSF)?",
        answers: [
            { text: "Choroid plexus", correct: true },
            { text: "Pituitary gland", correct: false },
            { text: "Cerebral cortex", correct: false },
            { text: "Cerebellum", correct: false }
        ]
    },
    {
        question: "Which enzyme is responsible for DNA replication?",
        answers: [
            { text: "DNA polymerase", correct: true },
            { text: "RNA polymerase", correct: false },
            { text: "Ligase", correct: false },
            { text: "Helicase", correct: false }
        ]
    },
    {
        question: "What is the primary storage form of glucose in humans?",
        answers: [
            { text: "Glycogen", correct: true },
            { text: "Cellulose", correct: false },
            { text: "Starch", correct: false },
            { text: "Lactose", correct: false }
        ]
    },
    {
        question: "Which vitamin is essential for blood clotting?",
        answers: [
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: false },
            { text: "Vitamin K", correct: true },
            { text: "Vitamin A", correct: false }
        ]
    },
    {
        question: "Which amino acid is a precursor for dopamine?",
        answers: [
            { text: "Tryptophan", correct: false },
            { text: "Tyrosine", correct: true },
            { text: "Glutamate", correct: false },
            { text: "Histidine", correct: false }
        ]
    },
    {
        question: "Which enzyme converts pyruvate to lactate in anaerobic conditions?",
        answers: [
            { text: "Lactate dehydrogenase", correct: true },
            { text: "Hexokinase", correct: false },
            { text: "Pyruvate kinase", correct: false },
            { text: "Aldolase", correct: false }
        ]
    },
    {
        question: "Which coenzyme is required for transamination reactions?",
        answers: [
            { text: "FAD", correct: false },
            { text: "Biotin", correct: false },
            { text: "Coenzyme Q", correct: false },
            { text: "Pyridoxal phosphate (PLP)", correct: true }
        ]
    },
    {
        question: "Which metabolic pathway generates the most ATP?",
        answers: [
            { text: "Glycolysis", correct: false },
            { text: "Pentose phosphate pathway", correct: false },
            { text: "Gluconeogenesis", correct: false },
            { text: "Electron transport chain", correct: true }
        ]
    },
    {
        question: "Which lipoprotein is known as 'bad cholesterol'?",
        answers: [
            { text: "HDL", correct: false },
            { text: "VLDL", correct: false },
            { text: "Chylomicrons", correct: false },
            { text: "LDL", correct: true }
        ]
    },
    {
        question: "Which enzyme is deficient in phenylketonuria (PKU)?",
        answers: [
            { text: "Tyrosinase", correct: false },
            { text: "Alkapton oxidase", correct: false },
            { text: "Methionine synthase", correct: false },
            { text: "Phenylalanine hydroxylase", correct: true }
        ]
    },
    {
        question: "Which enzyme is responsible for breaking down hydrogen peroxide?",
        answers: [
            { text: "Superoxide dismutase", correct: false },
            { text: "Peroxidase", correct: false },
            { text: "Catalase", correct: true },
            { text: "Glutathione reductase", correct: false }
        ]
    },
    {
        question: "What is the primary function of the urea cycle?",
        answers: [
            { text: "Energy production", correct: false },
            { text: "Gluconeogenesis", correct: false },
            { text: "Nitrogen excretion", correct: true },
            { text: "Lipid metabolism", correct: false }
        ]
    },
    {
        question: "Which vitamin deficiency leads to pernicious anemia?",
        answers: [
            { text: "Vitamin B6", correct: false },
            { text: "Vitamin B1", correct: false },
            { text: "Vitamin B12", correct: true },
            { text: "Vitamin C", correct: false }
        ]
    },
    {
        question: "Which fatty acid is essential in the human diet?",
        answers: [
            { text: "Linoleic acid", correct: true },
            { text: "Palmitic acid", correct: false },
            { text: "Stearic acid", correct: false },
            { text: "Oleic acid", correct: false }
        ]
    },
    {
        question: "Which molecule acts as the main energy currency in cells?",
        answers: [
            { text: "ATP", correct: true },
            { text: "NADH", correct: false },
            { text: "FADH2", correct: false },
            { text: "GTP", correct: false }
        ]
    },
    {
        question: "Which enzyme is the rate-limiting step in cholesterol synthesis?",
        answers: [
            { text: "HMG-CoA reductase", correct: true },
            { text: "Acetyl-CoA carboxylase", correct: false },
            { text: "Fatty acid synthase", correct: false },
            { text: "Glucose-6-phosphate dehydrogenase", correct: false }
        ]
    },
    {
        question: "Which enzyme is responsible for converting angiotensin I to angiotensin II?",
        answers: [
            { text: "Renin", correct: false },
            { text: "Aldosterone synthase", correct: false },
            { text: "Carbonic anhydrase", correct: false },
            { text: "Angiotensin-converting enzyme (ACE)", correct: true }
        ]
    },
    {
        question: "Which enzyme is inhibited by aspirin?",
        answers: [
            { text: "Cyclooxygenase (COX)", correct: true },
            { text: "Lipoxygenase", correct: false },
            { text: "Tyrosine kinase", correct: false },
            { text: "Adenylate cyclase", correct: false }
        ]
    },
    {
        question: "Which process occurs in the mitochondria?",
        answers: [
            { text: "Glycolysis", correct: false },
            { text: "Krebs cycle", correct: true },
            { text: "Fatty acid synthesis", correct: false },
            { text: "Gluconeogenesis", correct: false }
        ]
    },
    {
        question: "Which enzyme deficiency causes albinism?",
        answers: [
            { text: "Tyrosinase", correct: true },
            { text: "Phenylalanine hydroxylase", correct: false },
            { text: "Alkapton oxidase", correct: false },
            { text: "Glucose-6-phosphate dehydrogenase", correct: false }
        ]
    },
    {
        question: "Which coenzyme is required for carboxylation reactions?",
        answers: [
            { text: "Folic acid", correct: false },
            { text: "Thiamine", correct: false },
            { text: "Biotin", correct: true },
            { text: "Riboflavin", correct: false }
        ]
    },
    {
        question: "Which pacemaker of the heart initiates the heartbeat?",
        answers: [
            { text: "AV node", correct: false },
            { text: "Purkinje fibers", correct: false },
            { text: "SA node", correct: true },
            { text: "Bundle of His", correct: false }
        ]
    },
    {
        question: "Which hormone regulates blood calcium levels?",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Cortisol", correct: false },
            { text: "Parathyroid hormone", correct: true },
            { text: "Thyroxine", correct: false }
        ]
    },
    {
        question: "What is the primary neurotransmitter at the neuromuscular junction?",
        answers: [
            { text: "Acetylcholine", correct: true },
            { text: "Dopamine", correct: false },
            { text: "Serotonin", correct: false },
            { text: "GABA", correct: false }
        ]
    },
    {
        question: "Which organ is responsible for the production of erythropoietin?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Spleen", correct: false },
            { text: "Bone marrow", correct: false },
            { text: "Kidney", correct: true }
        ]
    },
    {
        question: "Which part of the brain regulates body temperature?",
        answers: [
            { text: "Thalamus", correct: false },
            { text: "Hypothalamus", correct: true },
            { text: "Medulla oblongata", correct: false },
            { text: "Cerebellum", correct: false }
        ]
    },
    {
        question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
        answers: [
            { text: "Pulmonary artery", correct: false },
            { text: "Pulmonary vein", correct: true },
            { text: "Aorta", correct: false },
            { text: "Superior vena cava", correct: false }
        ]
    },
    {
        question: "Which lung volume cannot be measured by spirometry?",
        answers: [
            { text: "Tidal volume", correct: false },
            { text: "Residual volume", correct: true },
            { text: "Inspiratory reserve volume", correct: false },
            { text: "Vital capacity", correct: false }
        ]
    },
    {
        question: "Which muscle is primarily responsible for inspiration?",
        answers: [
            { text: "Internal intercostal muscles", correct: false },
            { text: "Diaphragm", correct: true },
            { text: "Rectus abdominis", correct: false },
            { text: "Obliques", correct: false }
        ]
    },
    {
        question: "Which part of the nephron is responsible for the majority of sodium reabsorption?",
        answers: [
            { text: "Loop of Henle", correct: false },
            { text: "Proximal convoluted tubule", correct: true },
            { text: "Distal convoluted tubule", correct: false },
            { text: "Collecting duct", correct: false }
        ]
    },
    {
        question: "Which hormone increases water reabsorption in the kidneys?",
        answers: [
            { text: "Aldosterone", correct: false },
            { text: "Antidiuretic hormone (ADH)", correct: true },
            { text: "Renin", correct: false },
            { text: "Angiotensin II", correct: false }
        ]
    },
    {
        question: "Which neurotransmitter is deficient in Parkinson’s disease?",
        answers: [
            { text: "Acetylcholine", correct: false },
            { text: "Dopamine", correct: true },
            { text: "Serotonin", correct: false },
            { text: "GABA", correct: false }
        ]
    },
    {
        question: "Which part of the cardiac cycle corresponds to ventricular contraction?",
        answers: [
            { text: "Diastole", correct: false },
            { text: "Systole", correct: true },
            { text: "Isovolumetric relaxation", correct: false },
            { text: "Late diastole", correct: false }
        ]
    },
    {
        question: "Which gas law explains the movement of gases in and out of the lungs?",
        answers: [
            { text: "Boyle’s law", correct: false },
            { text: "Henry’s law", correct: false },
            { text: "Dalton’s law", correct: false },
            { text: "Fick’s law", correct: true }
        ]
    },
    {
        question: "Which of the following increases heart rate?",
        answers: [
            { text: "Parasympathetic stimulation", correct: false },
            { text: "Acetylcholine", correct: false },
            { text: "Vagal stimulation", correct: false },
            { text: "Sympathetic stimulation", correct: true }
        ]
    },
    {
        question: "Which structure of the eye is responsible for focusing light onto the retina?",
        answers: [
            { text: "Cornea", correct: false },
            { text: "Lens", correct: true },
            { text: "Iris", correct: false },
            { text: "Optic nerve", correct: false }
        ]
    },
    {
        question: "Which hormone is responsible for increasing blood glucose levels?",
        answers: [
            { text: "Glucagon", correct: true },
            { text: "Insulin", correct: false },
            { text: "Thyroxine", correct: false },
            { text: "Calcitonin", correct: false }
        ]
    },
    {
        question: "Which part of the adrenal gland secretes catecholamines?",
        answers: [
            { text: "Zona glomerulosa", correct: false },
            { text: "Zona fasciculata", correct: false },
            { text: "Medulla", correct: true },
            { text: "Zona reticularis", correct: false }
        ]
    },
    {
        question: "Which structure in the ear is responsible for detecting sound vibrations?",
        answers: [
            { text: "Semicircular canals", correct: false },
            { text: "Cochlea", correct: true },
            { text: "Eustachian tube", correct: false },
            { text: "Vestibule", correct: false }
        ]
    },
    {
        question: "Which component of blood is primarily responsible for oxygen transport?",
        answers: [
            { text: "White blood cells", correct: false },
            { text: "Platelets", correct: false },
            { text: "Hemoglobin", correct: true },
            { text: "Plasma proteins", correct: false }
        ]
    },
    {
        question: "Which sensory receptor detects pain?",
        answers: [
            { text: "Photoreceptor", correct: false },
            { text: "Nociceptor", correct: true },
            { text: "Thermoreceptor", correct: false },
            { text: "Mechanoreceptor", correct: false }
        ]
    },
    {
        question: "Which enzyme is responsible for converting glucose to glucose-6-phosphate in glycolysis?",
        answers: [
            { text: "Hexokinase", correct: true },
            { text: "Phosphofructokinase", correct: false },
            { text: "Glucose-6-phosphatase", correct: false },
            { text: "Pyruvate kinase", correct: false }
        ]
    },
    {
        question: "Which vitamin is essential for the synthesis of coenzyme A?",
        answers: [
            { text: "Vitamin B1", correct: false },
            { text: "Vitamin B6", correct: false },
            { text: "Vitamin B5", correct: true },
            { text: "Vitamin B12", correct: false }
        ]
    },
    {
        question: "Which amino acid is a precursor for serotonin synthesis?",
        answers: [
            { text: "Tyrosine", correct: false },
            { text: "Histidine", correct: false },
            { text: "Tryptophan", correct: true },
            { text: "Arginine", correct: false }
        ]
    },
    {
        question: "Which enzyme is deficient in phenylketonuria (PKU)?",
        answers: [
            { text: "Tyrosinase", correct: false },
            { text: "Phenylalanine hydroxylase", correct: true },
            { text: "Dopamine beta-hydroxylase", correct: false },
            { text: "Homogentisate oxidase", correct: false }
        ]
    },
    {
        question: "Which molecule acts as the primary carrier of acyl groups in fatty acid metabolism?",
        answers: [
            { text: "NADH", correct: false },
            { text: "FADH2", correct: false },
            { text: "Coenzyme A", correct: true },
            { text: "Carnitine", correct: false }
        ]
    },
    {
        question: "Which enzyme is involved in the detoxification of hydrogen peroxide?",
        answers: [
            { text: "Catalase", correct: true },
            { text: "Superoxide dismutase", correct: false },
            { text: "Glutathione peroxidase", correct: false },
            { text: "Peroxidase", correct: false }
        ]
    },
    {
        question: "Which lipoprotein is responsible for transporting cholesterol from peripheral tissues to the liver?",
        answers: [
            { text: "Chylomicrons", correct: false },
            { text: "VLDL", correct: false },
            { text: "LDL", correct: false },
            { text: "HDL", correct: true }
        ]
    },
    {
        question: "Which of the following is the primary nitrogenous waste product excreted by humans?",
        answers: [
            { text: "Ammonia", correct: false },
            { text: "Urea", correct: true },
            { text: "Uric acid", correct: false },
            { text: "Creatinine", correct: false }
        ]
    },
    {
        question: "Which coenzyme is essential for transamination reactions?",
        answers: [
            { text: "Pyridoxal phosphate (PLP)", correct: true },
            { text: "Biotin", correct: false },
            { text: "Thiamine pyrophosphate (TPP)", correct: false },
            { text: "Folic acid", correct: false }
        ]
    },
    {
        question: "Which metabolic pathway generates ribose-5-phosphate for nucleotide synthesis?",
        answers: [
            { text: "Glycolysis", correct: false },
            { text: "Krebs cycle", correct: false },
            { text: "Beta-oxidation", correct: false },
            { text: "Pentose phosphate pathway", correct: true }
        ]
    },
    {
        question: "Which bone is the longest in the human body?",
        answers: [
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false },
            { text: "Humerus", correct: false },
            { text: "Radius", correct: false }
        ]
    },
    {
        question: "Which cranial nerve is responsible for facial expressions?",
        answers: [
            { text: "Trigeminal nerve (CN V)", correct: false },
            { text: "Facial nerve (CN VII)", correct: true },
            { text: "Vagus nerve (CN X)", correct: false },
            { text: "Hypoglossal nerve (CN XII)", correct: false }
        ]
    },
    {
        question: "Which muscle is the primary flexor of the forearm at the elbow?",
        answers: [
            { text: "Triceps brachii", correct: false },
            { text: "Biceps brachii", correct: false },
            { text: "Brachialis", correct: true },
            { text: "Brachioradialis", correct: false }
        ]
    },
    {
        question: "Which part of the brain is responsible for coordination and balance?",
        answers: [
            { text: "Cerebellum", correct: true },
            { text: "Cerebrum", correct: false },
            { text: "Brainstem", correct: false },
            { text: "Thalamus", correct: false }
        ]
    },
    {
        question: "Which artery is the main blood supply to the brain?",
        answers: [
            { text: "Subclavian artery", correct: false },
            { text: "Vertebral artery", correct: false },
            { text: "Internal carotid artery", correct: true },
            { text: "Brachiocephalic artery", correct: false }
        ]
    },
    {
        question: "Which organ is primarily responsible for detoxification of drugs and toxins?",
        answers: [
            { text: "Kidney", correct: false },
            { text: "Spleen", correct: false },
            { text: "Pancreas", correct: false },
            { text: "Liver", correct: true }
        ]
    },
    {
        question: "Which of the following is a sesamoid bone?",
        answers: [
            { text: "Scaphoid", correct: false },
            { text: "Femur", correct: false },
            { text: "Patella", correct: true },
            { text: "Clavicle", correct: false }
        ]
    },
    {
        question: "Which part of the small intestine is responsible for the majority of nutrient absorption?",
        answers: [
            { text: "Duodenum", correct: false },
            { text: "Ileum", correct: false },
            { text: "Jejunum", correct: true },
            { text: "Colon", correct: false }
        ]
    },
    {
        question: "Which structure prevents food from entering the trachea during swallowing?",
        answers: [
            { text: "Soft palate", correct: false },
            { text: "Epiglottis", correct: true },
            { text: "Glottis", correct: false },
            { text: "Vocal cords", correct: false }
        ]
    },
    {
        question: "Which nerve is commonly compressed in carpal tunnel syndrome?",
        answers: [
            { text: "Ulnar nerve", correct: false },
            { text: "Radial nerve", correct: false },
            { text: "Median nerve", correct: true },
            { text: "Musculocutaneous nerve", correct: false }
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none"
    answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }


    Array.from(answerButtons.children).forEach(btn => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerText === "Play Again") {
        startQuiz();
    } else {
        nextQuestion();
    }
});

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.style.margin = "10px auto";
}

startQuiz();