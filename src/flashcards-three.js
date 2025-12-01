const flashcards = [
  {
    id: 1,
    question: "What does the Medical Model focus on in the context of disability?",
    answer: "It frames disability as an individual health condition to be treated or cured, emphasizing medical care and personal adjustment.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 2,
    question: "What is a key strength of the Medical Model?",
    answer: "It can address biological causes through treatment or management, which is vital for many people.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 3,
    question: "What is a key weakness of the Medical Model?",
    answer: "It often overlooks environmental and social barriers and can reduce disability to a 'problem' within the person.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 4,
    question: "What core idea defines the Social Model of disability?",
    answer: "Disability arises from societal barriers and attitudes rather than solely from an individual's impairment.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 5,
    question: "Why is the Social Model influential for accessibility?",
    answer: "It centers barrier removal and inclusive design as collective responsibilities, aligning with human rights.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 6,
    question: "What is a limitation of the Social Model?",
    answer: "It can downplay embodied/medical aspects of disability and may polarize political debates.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 7,
    question: "What does the Biopsychosocial Model integrate?",
    answer: "Biological, psychological, and social factors to understand and support the person holistically.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 8,
    question: "When is the Biopsychosocial Model especially useful?",
    answer: "In rehabilitation planning that coordinates medical treatment with social participation supports.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 9,
    question: "What is a noted challenge with the Biopsychosocial/ICF approach?",
    answer: "It can be complex to implement and risks misunderstanding the balance between medical and social factors.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 10,
    question: "How does the Economic Model define disability?",
    answer: "By its impact on work participation and productivity, often linked to benefit eligibility and costs.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 11,
    question: "What does the Economic Model acknowledge?",
    answer: "That limitations can require accommodations or income support to enable participation.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 12,
    question: "What is a drawback of the Economic Model?",
    answer: "It can stigmatize or exclude people who do not meet a legal disability threshold.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 13,
    question: "What is the focus of the Functional Solutions Model?",
    answer: "Identifying functional limitations and creating practical solutions—often technological or methodological—to reduce their impact.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 14,
    question: "How can the work of accessibility professionals be viewed through the Functional Solutions lens?",
    answer: "By delivering concrete fixes like screen reader compatibility, captioning, and adaptable interfaces.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "examples"
  },
  {
    id: 15,
    question: "What is a risk in a technology-first Functional Solutions approach?",
    answer: "Innovations may be impractical, overpriced, or ignore social and environmental fixes.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 16,
    question: "What does the Social Identity (Cultural Affiliation) Model emphasize?",
    answer: "Personal identity formed through membership in a community (e.g., Deaf culture) with shared experiences.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 17,
    question: "What is a strength of the Social Identity Model?",
    answer: "It embraces disability as a valued identity and source of community.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 18,
    question: "What is a potential drawback of the Social Identity Model?",
    answer: "A strong in-group identity may inadvertently exclude those who don't fit group expectations.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 19,
    question: "How does the Charity Model view disability?",
    answer: "As a personal misfortune, prompting benevolent aid to a needy population.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 20,
    question: "What positive can the Charity Model inspire?",
    answer: "Mobilizing resources to address immediate needs when help is truly necessary.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "strengths"
  },
  {
    id: 21,
    question: "What common criticism is made of the Charity Model?",
    answer: "It can be condescending, focusing on pity and short-term fixes over systemic change.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 22,
    question: "How is blindness characterized in the CPACC context?",
    answer: "A range from near-total to total vision loss; some may only detect light or large shapes.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "definition"
  },
  {
    id: 23,
    question: "What are key global figures related to vision impairment?",
    answer: "At least 2.2 billion people have vision impairment or blindness; low vision affects ~246 million worldwide.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "demographics"
  },
  {
    id: 24,
    question: "What are common characteristics of low vision?",
    answer: "Need for magnification, benefit from high contrast, and possible color discrimination challenges.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "characteristics"
  },
  {
    id: 25,
    question: "How common is red-green color vision deficiency by sex?",
    answer: "About 1 in 12 males and 1 in 200 females; blue-yellow deficiency is rarer.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "demographics"
  },
  {
    id: 26,
    question: "What web barriers commonly affect people with visual disabilities?",
    answer: "Missing text alternatives, low color contrast, poor structure, non-resizable content, and keyboard traps.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "barriers"
  },
  {
    id: 27,
    question: "What ICT practices improve access for visual disabilities?",
    answer: "Provide text alternatives, support magnification, use high-contrast palettes, avoid color-only cues, and keep layouts consistent.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 28,
    question: "Name assistive technologies that support people with visual disabilities.",
    answer: "Screen readers, screen magnifiers, audio description, refreshable braille (via screen readers), canes, and service animals.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 29,
    question: "What is the distinction between being Deaf and being Hard of Hearing?",
    answer: "Deaf usually refers to total or near-total hearing loss; Hard of Hearing refers to partial loss with some usable hearing.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "definition"
  },
  {
    id: 30,
    question: "How might communication preferences differ for people who are born Deaf vs. late-deafened?",
    answer: "People born Deaf often prefer sign language; late-deafened individuals may rely more on text and may not be fluent in sign language.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "characteristics"
  },
  {
    id: 31,
    question: "What are important prevalence statistics related to auditory disabilities?",
    answer: "About 430 million people have disabling hearing loss worldwide, and roughly 750,000 people in the EU use sign language as a first language.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "demographics"
  },
  {
    id: 32,
    question: "What are common communication barriers for people with auditory disabilities?",
    answer: "Missing captions, low-quality audio, poor acoustics, no microphone usage, and competing background sounds.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "barriers"
  },
  {
    id: 33,
    question: "What accessibility features support people with auditory disabilities?",
    answer: "Accurate captions, transcripts, sign language interpretation, good lighting for lip-reading, and visual alerts.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "solutions"
  },
  {
    id: 34,
    question: "What assistive technologies are used by people with auditory disabilities?",
    answer: "Assistive listening systems, personal listening devices, hearing aids, cochlear implants, and visual or haptic alerts.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 35,
    question: "How is Deaf-Blindness described in the CPACC documents?",
    answer: "A combined sensory disability where most individuals retain limited hearing or sight and rely heavily on touch for communication.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "definition"
  },
  {
    id: 36,
    question: "What is the global estimated prevalence of Deaf-Blindness?",
    answer: "Between 0.2% and 2% of the world’s population.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "demographics"
  },
  {
    id: 37,
    question: "What are common barriers for people who are Deaf-Blind?",
    answer: "Lack of braille versions of materials, incomplete braille output from digital tools, and absence of tactile sign language interpretation.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "barriers"
  },
  {
    id: 38,
    question: "What assistive technologies support people who are Deaf-Blind?",
    answer: "Refreshable braille displays, printed braille, haptic alerts, tactile navigation aids, and tactile sign language.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "assistive-tech"
  },
  {
    id: 39,
    question: "What is the difference between speech and language disabilities?",
    answer: "Speech disabilities affect sound production; language disabilities affect understanding and expressing ideas.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "definition"
  },
  {
    id: 40,
    question: "What distinguishes Organic from Functional Speech Sound Disorders?",
    answer: "Organic SSD have known motor, neurological, structural, or sensory causes; Functional SSD have no identifiable cause.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "definition"
  },
  {
    id: 41,
    question: "What are typical characteristics of Organic Speech Sound Disorders?",
    answer: "Slurred or slow speech, inconsistent sound errors, distortions, and difficulty with tone, stress, or rhythm.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "characteristics"
  },
  {
    id: 42,
    question: "What is aphasia?",
    answer: "A language disorder caused by brain injury that affects speaking, understanding, reading, and writing.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "definition"
  },
  {
    id: 43,
    question: "What accessibility practices support people with speech and language disabilities?",
    answer: "Providing multiple communication modes, giving more time, and offering text-based alternatives to speech.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "solutions"
  },
  {
    id: 44,
    question: "What assistive technologies support speech and language disabilities?",
    answer: "AAC devices, text-to-speech, speech-to-text, symbol-based communication boards, and organization/writing tools.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 45,
    question: "What disabilities fall under mobility, flexibility, and body structure impairments?",
    answer: "Conditions affecting ambulation, fine motor control, limb mobility, coordination, skeletal structure, or body size/shape.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "definition"
  },
  {
    id: 46,
    question: "What physical environment barriers commonly affect mobility disabilities?",
    answer: "Narrow routes, steep steps, heavy doors, high shelves, poorly placed controls, and inaccessible seating.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "barriers"
  },
  {
    id: 47,
    question: "What digital barriers affect people with fine motor disabilities?",
    answer: "Small targets, tightly packed controls, and interfaces requiring one specific input method like mouse-only navigation.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "barriers"
  },
  {
    id: 48,
    question: "What accessibility practices help people with mobility disabilities in physical spaces?",
    answer: "Clear paths, level entrances, wide doorways, reachable controls, and knee/toe clearance.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "solutions"
  },
  {
    id: 49,
    question: "What assistive technologies support mobility disabilities?",
    answer: "Walkers, wheelchairs, scooters, railings, reachers, lifts, switch devices, adaptive keyboards, voice control, and eye tracking.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 50,
    question: "What do cognitive processes encompass in the CPACC framework?",
    answer: "Mental functions like attention, memory, language, perception, planning, and calculation.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 51,
    question: "How can external factors affect cognitive processing?",
    answer: "Stress, information overload, and lack of sleep can disrupt working memory and comprehension.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 52,
    question: "How is Intellectual Disability defined?",
    answer: "Significant limitations in intellectual functioning and adaptive behavior with onset in childhood.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 53,
    question: "What are the three adaptive behavior areas used to understand Intellectual Disability?",
    answer: "Conceptual, social, and practical skills.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 54,
    question: "What are examples of conceptual skills?",
    answer: "Language, reading, writing, time and money management, reasoning, knowledge, and memory.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 55,
    question: "How is dyslexia described in the CPACC materials?",
    answer: "A learning disability affecting phonological processing, spelling, and rapid visual-verbal responses.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 56,
    question: "What is dyscalculia?",
    answer: "A learning disability affecting numerical reasoning and calculation skills.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 57,
    question: "How is ADHD described in the CPACC framework?",
    answer: "A neurodevelopmental condition involving patterns of inattention, hyperactivity, and impulsivity.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 58,
    question: "What is autism in a high-level accessibility context?",
    answer: "A neurodevelopmental condition involving differences in communication, behavior, and processing needs.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "definition"
  },
  {
    id: 59,
    question: "What design strategies support cognitive accessibility?",
    answer: "Reducing cognitive load, providing clear structure, supporting personalization, helping prevent errors, and offering multiple formats.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 60,
    question: "What is photosensitive epilepsy in digital contexts?",
    answer: "A condition where flashing content can trigger seizures in some users.",
    topic: { id: "seizure-disabilities", label: "Seizure Disabilities" },
    category: "definition"
  },
  {
    id: 61,
    question: "What practices reduce seizure risk in digital content?",
    answer: "Avoid rapid flashing, include warnings, and follow flashing thresholds.",
    topic: { id: "seizure-disabilities", label: "Seizure Disabilities" },
    category: "solutions"
  },
  {
    id: 62,
    question: "What conditions are included under psychological disabilities in the CPACC materials?",
    answer: "Conditions such as anxiety disorders, bipolar disorder, and schizophrenia.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "definition"
  },
  {
    id: 63,
    question: "What accessibility practices support mental health-related disabilities?",
    answer: "Predictable interactions, options to reduce sensory load, pacing tasks, and supportive communication.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "solutions"
  },
  {
    id: 64,
    question: "What does multiple or complex disabilities imply for accessible design?",
    answer: "Users may have overlapping needs requiring flexible, combined, and individualized supports.",
    topic: { id: "multiple-complex-disabilities", label: "Multiple/Complex Disabilities" },
    category: "definition"
  },
  {
    id: 65,
    question: "What share of the global population experiences significant disability?",
    answer: "About one in six people worldwide.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "demographics"
  },
  {
    id: 66,
    question: "What etiquette principles should guide interactions with people with disabilities?",
    answer: "Dignity, independence, equal opportunity, listening to the individual, and using inclusive language.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 67,
    question: "How do individualized accommodations differ from Universal Design?",
    answer: "Accommodations are adjustments made for one person, while Universal Design proactively creates environments usable by the widest range of people from the start.",
    topic: { id: "accommodations-vs-universal-design", label: "Accommodations vs. Universal Design" },
    category: "comparison"
  },
  {
    id: 68,
    question: "Why are accommodations still important even when Universal Design is applied?",
    answer: "Individual needs vary, so some people may still require personalized adjustments beyond what Universal Design can provide.",
    topic: { id: "accommodations-vs-universal-design", label: "Accommodations vs. Universal Design" },
    category: "benefits"
  },
  {
    id: 69,
    question: "Why is Universal Design preferred where feasible?",
    answer: "It reduces the need for individual fixes, increases usability, and improves experiences for everyone.",
    topic: { id: "accommodations-vs-universal-design", label: "Accommodations vs. Universal Design" },
    category: "benefits"
  },
  {
    id: 70,
    question: "What are key organizational benefits of accessibility?",
    answer: "Reduced legal risk, improved usability, increased reach, and stronger brand reputation.",
    topic: { id: "benefits-of-accessibility", label: "Benefits of Accessibility" },
    category: "benefits"
  },
  {
    id: 71,
    question: "How can accessibility improve user experience for everyone?",
    answer: "Features like captions, clear structure, and alternative input methods assist people with disabilities and benefit all users in varied environments.",
    topic: { id: "benefits-of-accessibility", label: "Benefits of Accessibility" },
    category: "examples"
  },
  {
    id: 72,
    question: "What does POUR stand for in WCAG?",
    answer: "Perceivable, Operable, Understandable, Robust.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 73,
    question: "Give an example of a Perceivable requirement.",
    answer: "Providing text alternatives for non-text content.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "examples"
  },
  {
    id: 74,
    question: "Give an example of an Operable requirement.",
    answer: "Supporting complete keyboard navigation without traps.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "examples"
  },
  {
    id: 75,
    question: "Give an example of an Understandable requirement.",
    answer: "Using clear labels, instructions, and consistent navigation.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "examples"
  },
  {
    id: 76,
    question: "Give an example of a Robust requirement.",
    answer: "Using valid semantic HTML to ensure compatibility with assistive technologies.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "examples"
  },
  {
    id: 77,
    question: "What is a core goal of accessibility in the built environment?",
    answer: "To ensure equitable and safe access to spaces, transportation, and public services for people with diverse abilities.",
    topic: { id: "built-environment-accessibility", label: "Built Environment Accessibility" },
    category: "principles"
  },
  {
    id: 78,
    question: "How does accessible built environment design support independence?",
    answer: "By providing features like level entrances, wide routes, reachable controls, and adequate maneuvering space.",
    topic: { id: "built-environment-accessibility", label: "Built Environment Accessibility" },
    category: "examples"
  },
  {
    id: 79,
    question: "What does the Universal Design principle Equitable Use emphasize?",
    answer: "Designing products that offer the same or equivalent use to all people without segregation.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 80,
    question: "What does Flexibility in Use mean in Universal Design?",
    answer: "Providing adaptable methods of use that accommodate different preferences, handedness, and required precision.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 81,
    question: "What is the goal of the Simple and Intuitive Use principle?",
    answer: "Reducing unnecessary complexity and matching the user's expectations and cultural norms.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 82,
    question: "What does Perceptible Information mean in Universal Design?",
    answer: "Presenting essential information in multiple formats—visual, verbal, tactile—and ensuring strong contrast.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 83,
    question: "What is the focus of the Tolerance for Error principle?",
    answer: "Reducing hazards, preventing errors, warning early, and including fail-safe features.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 84,
    question: "What does Low Physical Effort mean in Universal Design?",
    answer: "Allowing comfortable body posture, using reasonable force, and minimizing sustained effort.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 85,
    question: "What does Size and Space for Approach and Use focus on?",
    answer: "Providing adequate room for seated and standing users, different hand sizes, and assistive devices.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 86,
    question: "What is Universal Design for Learning (UDL)?",
    answer: "A framework that supports diverse learners through multiple means of engagement, representation, and action/expression.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "definition"
  },
  {
    id: 87,
    question: "What are the three principles of UDL?",
    answer: "Engagement (why), Representation (what), and Action & Expression (how).",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "principles"
  },
  {
    id: 88,
    question: "What is an example of UDL’s Engagement principle?",
    answer: "Providing self-paced learning modules or mentoring options.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "examples"
  },
  {
    id: 89,
    question: "What is an example of UDL’s Representation principle?",
    answer: "Offering information in multiple formats like video, text, and diagrams.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "examples"
  },
  {
    id: 90,
    question: "What is an example of UDL’s Action & Expression principle?",
    answer: "Allowing learners to demonstrate knowledge through presentations, projects, or practical work.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "examples"
  },
  {
    id: 91,
    question: "How does accessibility differ from usability?",
    answer: "Accessibility ensures no one is excluded; usability focuses on efficiency and ease of use for general audiences.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 92,
    question: "How does accessibility relate to user experience (UX)?",
    answer: "Accessibility is one of the core components of UX, alongside usefulness, desirability, and credibility.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 93,
    question: "What is a key difference between usability and accessibility?",
    answer: "Usability alone may not consider people with disabilities unless accessibility principles are included.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 94,
    question: "How do UX and accessibility complement each other?",
    answer: "UX aims to create satisfying and trustworthy experiences, while accessibility ensures those experiences include everyone.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 95,
    question: "What does the CPACC material say about the relationship between usability and accessibility?",
    answer: "Both are interconnected—accessibility removes exclusion, and usability ensures smooth, intuitive interaction.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 96,
    question: "How does universal design combine accessibility and usability?",
    answer: "It integrates barrier removal with ease of use to create products that work for as many people as possible from the beginning.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "comparison"
  },
  {
    id: 97,
    question: "What is the UDHR and why is it important for disability rights?",
    answer: "It is the Universal Declaration of Human Rights (1948), establishing that all people are entitled to fundamental rights regardless of identity or location, forming a foundation for later disability-specific protections.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "definition"
  },
  {
    id: 98,
    question: "What did the Declaration on the Rights of Disabled Persons (1975) emphasize?",
    answer: "That people with disabilities have the same civil and political rights as others and should be protected from exploitation, discrimination, and degrading treatment.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "definition"
  },
  {
    id: 99,
    question: "What major shift does the CRPD represent?",
    answer: "It reframes people with disabilities as rights-holders with autonomy, moving away from charity or medical-only views.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "definition"
  },
  {
    id: 100,
    question: "What is the purpose of the CRPD?",
    answer: "To apply existing human rights to people with disabilities and address barriers that limit full participation.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "law-requirements"
  },
  {
    id: 101,
    question: "What does CRPD Article 9 require governments to do?",
    answer: "Remove physical and digital barriers, ensure accessible transportation, provide accessible information, enforce standards, and promote accessible technology design.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "law-requirements"
  },
  {
    id: 102,
    question: "How do states monitor and report progress under the CRPD?",
    answer: "They create national frameworks, submit reports to the UN Committee, respond to lists of issues, and review alternative reports from NGOs.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "monitoring"
  },
  {
    id: 103,
    question: "What problem does the Marrakesh Treaty address?",
    answer: "The 'book famine' that prevents people with print disabilities from accessing written materials.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "definition"
  },
  {
    id: 104,
    question: "How does the Marrakesh Treaty improve access to books?",
    answer: "By allowing accessible format copies without copyright permission and enabling international exchange of these formats.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "law-requirements"
  },
  {
    id: 105,
    question: "What are examples of regional disability rights instruments?",
    answer: "The EU Charter of Fundamental Rights, the African Charter on Human and Peoples\u2019 Rights, and the Inter-American Convention on disability discrimination.",
    topic: {
      id: "regional-instruments",
      label: "Regional Disability Rights Instruments"
    },
    category: "definition"
  },
  {
    id: 106,
    question: "What does the Equality Act 2010 require in the UK?",
    answer: "It prohibits discrimination and reinforces accessibility requirements across services, employment, and public sectors.",
    topic: {
      id: "national-laws",
      label: "National & Provincial Laws"
    },
    category: "definition"
  },
  {
    id: 107,
    question: "What does the ADA (1990) guarantee in the United States?",
    answer: "Civil rights protections for people with disabilities across employment, transportation, public spaces, and access to services.",
    topic: {
      id: "national-laws",
      label: "National & Provincial Laws"
    },
    category: "definition"
  },
  {
    id: 108,
    question: "What is the goal of the AODA in Ontario?",
    answer: "To create and enforce accessibility standards across key sectors to achieve a barrier-free province.",
    topic: {
      id: "national-laws",
      label: "National & Provincial Laws"
    },
    category: "definition"
  },
  {
    id: 109,
    question: "How do global human rights instruments relate to technical ICT accessibility?",
    answer: "They set the vision and legal basis, while standards like WCAG provide concrete implementation requirements.",
    topic: {
      id: "applying-standards-to-ict",
      label: "Applying Standards to ICT"
    },
    category: "principles"
  },
  {
    id: 110,
    question: "Why is procurement important in organizational accessibility?",
    answer: "Buying accessible products prevents costly retrofits, ensures compatibility with AT, and reinforces accessibility expectations with vendors.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "principles"
  },
  {
    id: 111,
    question: "What are key areas of an accessibility maturity model?",
    answer: "Leadership commitment, policies, training, testing processes, procurement, communications, and continuous improvement.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "principles"
  },
  {
    id: 112,
    question: "Why are accessibility champions valuable inside organizations?",
    answer: "They advocate for inclusive practices, help teams adopt guidelines, and sustain long-term cultural change.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "benefits"
  },
  {
    id: 113,
    question: "What organizational processes commonly include accessibility requirements?",
    answer: "Design reviews, testing procedures, employee onboarding, communications, and emergency preparedness.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "principles"
  },
  {
    id: 114,
    question: "Why must accessible communications be part of organizational strategy?",
    answer: "Clear, accessible communication ensures employees and customers can understand information regardless of disability.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "principles"
  },
  {
    id: 115,
    question: "How can training support organizational accessibility?",
    answer: "By giving teams the knowledge to design, develop, procure, and evaluate accessible products and services.",
    topic: {
      id: "organizational-integration",
      label: "Integrating Accessibility Across the Organization"
    },
    category: "solutions"
  },
  {
    id: 116,
    question: "How does the CRPD promote accountability among countries?",
    answer: "Through required reporting, committee reviews, issue lists, and participation of NGOs in monitoring progress.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "monitoring"
  },
  {
    id: 117,
    question: "What is the global impact of the CRPD?",
    answer: "More than 180 countries have ratified it, influencing national laws, accessibility policies, and enforcement mechanisms worldwide.",
    topic: {
      id: "international-instruments",
      label: "International Rights Instruments"
    },
    category: "benefits"
  }
]