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
  },
  {
    id: 118,
    question: "Why is keyboard accessibility a core requirement under WCAG?",
    answer: "Because many users cannot operate a mouse, and content must be operable using only the keyboard to avoid exclusion.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 119,
    question: "Which WCAG principle is violated when non-text content lacks alt text?",
    answer: "Perceivable, because essential information is not presented in a way all users can access.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "comparison"
  },
  {
    id: 120,
    question: "Why is relying on color alone a barrier?",
    answer: "Color-only cues exclude users with low vision, color vision deficiencies, or display limitations.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "barriers"
  },
  {
    id: 121,
    question: "What is an example of a multimodal cue that is not color-dependent?",
    answer: "Using text labels, shapes, patterns, or icons in addition to color to convey meaning.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 122,
    question: "Why do users with low vision benefit from consistent layout?",
    answer: "Predictability reduces cognitive load and supports navigation using magnification or screen zoom.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 123,
    question: "What makes captions essential for many HOH users during video playback?",
    answer: "They provide verbal information visually when audio is inaccessible or unclear.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "solutions"
  },
  {
    id: 124,
    question: "Why is good lighting an accessibility need in events for HOH participants?",
    answer: "It enables lip-reading and reading facial expressions or sign language clearly.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "solutions"
  },
  {
    id: 125,
    question: "Why may Deaf signers prefer real-time human interpretation over automated captions?",
    answer: "Meaning in sign language is conveyed through grammar and structure that automated captions cannot capture.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "characteristics"
  },
  {
    id: 126,
    question: "How does tactile communication support Deaf-Blind users?",
    answer: "It provides information through touch, such as tactile sign language or braille, when visual and auditory channels are limited.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "assistive-tech"
  },
  {
    id: 127,
    question: "Why must touchscreens offer alternatives for users with mobility impairments?",
    answer: "Some users cannot perform precise gestures, so voice, keyboard, or switch-activated controls may be needed.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "solutions"
  },
  {
    id: 128,
    question: "What digital design practice helps reduce accidental activation for users with motor impairments?",
    answer: "Providing sufficiently large targets and spacing interactive elements.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "solutions"
  },
  {
    id: 129,
    question: "Why is clear structure important for users with cognitive disabilities?",
    answer: "It minimizes cognitive load by making information easier to process and understand.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 130,
    question: "How does predictable navigation support cognitive accessibility?",
    answer: "It helps users build mental models of where information is located, reducing confusion.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 131,
    question: "Why are transcripts helpful for users with cognitive disabilities?",
    answer: "They allow rereading, highlighting, and processing content at a personal pace.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 132,
    question: "What is a common trigger for photosensitive epilepsy in digital interfaces?",
    answer: "Rapid flashing or strobing content at specific frequencies.",
    topic: { id: "seizure-disabilities", label: "Seizure Disabilities" },
    category: "barriers"
  },
  {
    id: 133,
    question: "Why is sensory overload a barrier for many users with psychological disabilities?",
    answer: "Overstimulating interfaces can increase stress, anxiety, and difficulty concentrating.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "barriers"
  },
  {
    id: 134,
    question: "What design strategies help reduce sensory overload?",
    answer: "Providing calm layouts, reducing motion, and allowing users to hide distractions.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "solutions"
  },
  {
    id: 135,
    question: "Why do people with multiple or complex disabilities often require layered accommodations?",
    answer: "Overlapping disabilities may require combining supports from several categories at once.",
    topic: { id: "multiple-complex-disabilities", label: "Multiple/Complex Disabilities" },
    category: "definition"
  },
  {
    id: 136,
    question: "Why is user choice essential in inclusive design?",
    answer: "Different users have different strengths, limitations, and preferences, so flexibility supports more people.",
    topic: { id: "accommodations-vs-universal-design", label: "Accommodations vs. Universal Design" },
    category: "principles"
  },
  {
    id: 137,
    question: "How does Universal Design relate to equality of experience?",
    answer: "It aims to provide equitable use and reduce stigma by designing for the widest range of users from the start.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "benefits"
  },
  {
    id: 138,
    question: "How do the CRPD and WCAG complement each other?",
    answer: "The CRPD establishes accessibility as a human right, while WCAG provides technical criteria to implement that right digitally.",
    topic: { id: "applying-standards-to-ict", label: "Applying Standards to ICT" },
    category: "comparison"
  },
  {
    id: 139,
    question: "Why must organizations include accessibility in procurement?",
    answer: "Purchasing inaccessible products creates barriers and forces expensive retrofits, whereas accessible procurement prevents problems early.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 140,
    question: "How do accessibility policies help organizations stay consistent?",
    answer: "They set clear expectations and processes so accessibility is considered across design, development, and operations.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 141,
    question: "Why is training essential for achieving accessibility maturity?",
    answer: "Teams must understand disabilities, standards, and tools in order to consistently create accessible products.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "solutions"
  },
  {
    id: 142,
    question: "What role does leadership play in accessibility success?",
    answer: "Leaders set priorities, allocate resources, and reinforce that accessibility is part of organizational culture.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 143,
    question: "Why is feedback from people with disabilities essential in user-centered design?",
    answer: "Real-world feedback ensures that solutions address actual barriers rather than assumptions.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 144,
    question: "How do prototypes support accessible design?",
    answer: "They allow early testing with diverse users, revealing issues before implementation.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "examples"
  },
  {
    id: 145,
    question: "What is one risk of implementing accessibility only at the end of a project?",
    answer: "Late fixes are costly and may not fully resolve foundational design barriers.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "barriers"
  },
  {
    id: 146,
    question: "Why is credibility considered part of UX?",
    answer: "Users trust systems more when information is reliable, consistent, and accessible.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "principles"
  },
  {
    id: 147,
    question: "How does Accessibility contribute to emotional impact in UX?",
    answer: "Inclusive experiences reduce frustration and support a sense of belonging.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability, and UX" },
    category: "benefits"
  },
  {
    id: 148,
    question: "How does flexible assessment benefit learners under UDL?",
    answer: "It allows them to demonstrate mastery in ways aligned with their strengths, reducing barriers.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "benefits"
  },
  {
    id: 149,
    question: "What does inclusive language accomplish in disability etiquette?",
    answer: "It respects individuals' identities and avoids harmful stereotypes.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 150,
    question: "Why is listening to the individual an essential etiquette guideline?",
    answer: "People have differing needs and preferences, so listening ensures support aligns with what works for them.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 151,
    question: "How does the Social Model view the source of disability?",
    answer: "It sees disability as arising from societal barriers and inaccessible environments rather than from the person’s impairment.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 152,
    question: "How does the Medical Model differ from the Social Model?",
    answer: "The Medical Model focuses on the individual's impairment, while the Social Model focuses on external barriers created by society.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "comparison"
  },
  {
    id: 153,
    question: "What makes the Biopsychosocial Model holistic?",
    answer: "It incorporates biological, psychological, and social factors to understand and support the person’s functioning.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "benefits"
  },
  {
    id: 154,
    question: "What key idea distinguishes the Cultural Identity Model of disability?",
    answer: "It highlights disability as a shared cultural identity, such as the Deaf community with its own language and norms.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 155,
    question: "Why can the Charity Model be problematic?",
    answer: "It frames disabled people as passive recipients of help, which can be paternalistic and reinforce stereotypes.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 156,
    question: "What distinguishes the Functional Solutions Model from the Medical Model?",
    answer: "Functional Solutions focuses on practical problem-solving like assistive tech, whereas the Medical Model focuses on treating the condition itself.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "comparison"
  },
  {
    id: 157,
    question: "How does Universal Design reduce the need for accommodations?",
    answer: "By designing products and environments to support many user needs from the start, minimizing individualized fixes.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "benefits"
  },
  {
    id: 158,
    question: "Why should Universal Design not replace accommodations?",
    answer: "Because some users still need personalized support that UD cannot fully address.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 159,
    question: "How does UDL differ from UD?",
    answer: "UDL applies Universal Design thinking to learning environments, focusing on multiple means of engagement, representation, and expression.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "comparison"
  },
  {
    id: 160,
    question: "Why does UDL emphasize flexible assessment?",
    answer: "Because learners differ in how they communicate understanding, and flexibility reduces unnecessary barriers.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "benefits"
  },
  {
    id: 161,
    question: "Why are multimodal materials central to UDL?",
    answer: "Different formats support diverse sensory, cognitive, and linguistic needs.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "principles"
  },
  {
    id: 162,
    question: "How does predictable navigation support users with memory-related disabilities?",
    answer: "Consistent structure helps them rely on pattern recognition instead of short-term memory.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 163,
    question: "Why is plain language an accessibility tool?",
    answer: "It makes content easier to process for users with cognitive, linguistic, or psychological disabilities.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 164,
    question: "How does anxiety affect digital interactions?",
    answer: "Users may struggle with complex, fast-paced, or overflowing interfaces, increasing cognitive burden.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "characteristics"
  },
  {
    id: 165,
    question: "Why do captions benefit more users than only Deaf or Hard of Hearing individuals?",
    answer: "Captions assist users in noisy places, quiet environments, language learners, and those with attention or processing differences.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "benefits"
  },
  {
    id: 166,
    question: "Why do some assistive technologies depend on semantic HTML?",
    answer: "Screen readers and braille displays rely on proper structure to present headings, lists, regions, and relationships accurately.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 167,
    question: "What is one advantage of braille displays for Deaf-Blind users?",
    answer: "They provide tactile access to digital information that is otherwise inaccessible through sight or hearing.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "assistive-tech"
  },
  {
    id: 168,
    question: "Why is reachability an accessibility concern?",
    answer: "Users with mobility or body-structure disabilities may not access controls placed too high, too low, or too deep.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "barriers"
  },
  {
    id: 169,
    question: "How do adjustable workstations support accessibility?",
    answer: "They accommodate different postures, assistive devices, and body sizes.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility, and Body Structure Disabilities" },
    category: "solutions"
  },
  {
    id: 170,
    question: "How do transcripts support users with speech or language disabilities?",
    answer: "They allow careful review, rereading, and clarification without relying on auditory processing.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "solutions"
  },
  {
    id: 171,
    question: "Why do AAC devices support independence?",
    answer: "They enable users who cannot speak to communicate through alternative means.",
    topic: { id: "speech-language-disabilities", label: "Speech and Language Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 172,
    question: "Why is the CRPD considered a turning point in disability rights?",
    answer: "It transformed disability rights from recommendations into legally binding obligations for ratifying countries.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "benefits"
  },
  {
    id: 173,
    question: "How does the CRPD promote accessibility in new technologies?",
    answer: "Article 9 encourages accessible design from the start to ensure technologies are usable and affordable.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "law-requirements"
  },
  {
    id: 174,
    question: "Why do NGOs submit alternative reports to the CRPD Committee?",
    answer: "To provide an independent perspective on a country’s progress and highlight issues governments may overlook.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "monitoring"
  },
  {
    id: 175,
    question: "How does the Marrakesh Treaty support education for print-disabled learners?",
    answer: "It allows accessible educational materials to be created and shared without copyright barriers.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "benefits"
  },
  {
    id: 176,
    question: "Why is accessibility in procurement more cost-effective than retrofitting?",
    answer: "Selecting accessible products early avoids expensive redesigns and ensures compatibility with assistive technologies.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "benefits"
  },
  {
    id: 177,
    question: "Why is leadership endorsement essential in accessibility programs?",
    answer: "It drives accountability, resource allocation, and organization-wide engagement.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 178,
    question: "What role does policy play in accessibility maturity?",
    answer: "Policies define expectations, responsibilities, and processes, helping teams stay consistent over time.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 179,
    question: "Why must accessibility be included in organizational training?",
    answer: "Teams need shared foundational knowledge to create accessible products across disciplines.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "solutions"
  },
  {
    id: 180,
    question: "How do inclusive communication practices support accessibility?",
    answer: "They ensure information is understandable and perceivable for employees and customers with diverse needs.",
    topic: { id: "organizational-integration", label: "Integrating Accessibility Across the Organization" },
    category: "principles"
  },
  {
    id: 181,
    question: "What is the primary goal of accessibility standards like WCAG?",
    answer: "To provide measurable, testable criteria ensuring digital content is perceivable, operable, understandable, and robust for users with disabilities.",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "definition"
  },
  {
    id: 182,
    question: "Which organization develops the Web Content Accessibility Guidelines (WCAG)?",
    answer: "The World Wide Web Consortium (W3C) through its Web Accessibility Initiative (WAI).",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "facts"
  },
  {
    id: 183,
    question: "List WCAG’s four foundational principles.",
    answer: "Perceivable, Operable, Understandable, and Robust (P.O.U.R.).",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "key-points"
  },
  {
    id: 184,
    question: "What does ‘perceivable’ mean in WCAG?",
    answer: "Information and interface components must be presented in ways users can perceive, such as providing text alternatives for non-text content.",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "principles"
  },
  {
    id: 185,
    question: "What is the main goal of the Universal Declaration of Human Rights (1948)?",
    answer: "To affirm that all people are entitled to fundamental rights and freedoms regardless of background or ability.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "definition"
  },
  {
    id: 186,
    question: "How does the Declaration on the Rights of Disabled Persons (1975) expand the UDHR?",
    answer: "It explicitly recognizes equal civil and political rights for persons with disabilities and condemns discrimination and abuse.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "context"
  },
  {
    id: 187,
    question: "What is the main contribution of the Convention on the Rights of Persons with Disabilities (CRPD)?",
    answer: "It reframes disability as a human-rights issue, obligating governments to ensure equality, participation, and accessibility.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "definition"
  },
  {
    id: 188,
    question: "What is the Marrakesh Treaty designed to do?",
    answer: "Allow creation and cross-border exchange of accessible copies of copyrighted works for people who are blind, visually impaired, or print-disabled.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "law-requirements"
  },
  {
    id: 189,
    question: "Which regional charter explicitly includes disability rights in Europe?",
    answer: "The EU Charter of Fundamental Rights.",
    topic: { id: "regional-laws", label: "Regional Instruments" },
    category: "facts"
  },
  {
    id: 190,
    question: "Name the African human-rights document addressing disability inclusion.",
    answer: "The African Charter on Human and People’s Rights.",
    topic: { id: "regional-laws", label: "Regional Instruments" },
    category: "facts"
  },
  {
    id: 191,
    question: "Which inter-American convention focuses on eliminating discrimination against persons with disabilities?",
    answer: "The Inter-American Convention on the Elimination of All Forms of Discrimination Against Persons with Disabilities.",
    topic: { id: "regional-laws", label: "Regional Instruments" },
    category: "definition"
  },
  {
    id: 192,
    question: "What is the core aim of the Americans with Disabilities Act (ADA 1990)?",
    answer: "To prohibit discrimination based on disability across employment, public services, public accommodations, and telecommunications.",
    topic: { id: "national-laws", label: "National and Provincial Laws" },
    category: "definition"
  },
    {
    id: 193,
    question: "Which UK law replaced the Disability Discrimination Act and strengthened equal rights?",
    answer: "The Equality Act 2010.",
    topic: { id: "national-laws", label: "National and Provincial Laws" },
    category: "facts"
  },
  {
    id: 194,
    question: "What Canadian law advances accessibility in Ontario?",
    answer: "The Accessibility for Ontarians with Disabilities Act (AODA) 2005.",
    topic: { id: "national-laws", label: "National and Provincial Laws" },
    category: "facts"
  },
  {
    id: 195,
    question: "What is Section 508 of the U.S. Rehabilitation Act?",
    answer: "A federal requirement ensuring ICT procured or used by the U.S. government is accessible to people with disabilities.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "law-requirements"
  },
  {
    id: 196,
    question: "Why is EN 301 549 important in Europe?",
    answer: "It defines ICT accessibility requirements for public procurement across EU member states.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "law-requirements"
  },
  {
    id: 197,
    question: "What does ‘reasonable accommodation’ mean in accessibility law?",
    answer: "Necessary and appropriate adjustments that do not impose undue burden and ensure equal access for individuals with disabilities.",
    topic: { id: "legal-terms", label: "Accessibility Law Terms" },
    category: "definition"
  },
  {
    id: 198,
    question: "How does ‘undue burden’ affect accessibility obligations?",
    answer: "It defines the limit beyond which a change would be unreasonably costly or disruptive for an organization.",
    topic: { id: "legal-terms", label: "Accessibility Law Terms" },
    category: "definition"
  },
  {
    id: 199,
    question: "Why should organizations adopt a maturity model for accessibility?",
    answer: "To track progress from ad-hoc efforts toward systematic, integrated accessibility governance.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "benefits"
  },
  {
    id: 200,
    question: "What is the role of management champions in accessibility?",
    answer: "They advocate for inclusive design, secure resources, and influence organizational culture toward accessibility.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 201,
    question: "What are key elements of an accessibility policy?",
    answer: "Scope, roles and responsibilities, goals, standards reference (WCAG/EN 301 549), and monitoring processes.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 202,
    question: "How can communication management support accessibility?",
    answer: "By ensuring internal and external messages use plain language, accessible formats, and inclusive visuals.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 203,
    question: "What is ‘accessibility evaluation’ within organizations?",
    answer: "A structured review of products, services, and communications against recognized standards like WCAG or EN 301 549.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "definition"
  },
  {
    id: 204,
    question: "Why is recruiting and hiring people with disabilities important for accessibility culture?",
    answer: "It ensures representation, informs design decisions, and fosters a workplace that values diverse perspectives.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "benefits"
  },
  {
    id: 205,
    question: "How do public procurement laws encourage accessible innovation?",
    answer: "They require suppliers to meet accessibility criteria, driving market-wide improvements in inclusive design.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "impact"
  },
  {
    id: 206,
    question: "Why should accessibility be included in project lifecycles?",
    answer: "Integrating it early prevents costly retrofits and aligns teams on inclusive standards from the start.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 207,
    question: "What is ‘ICT Accessibility Integration’ according to the CPACC Body of Knowledge?",
    answer: "Embedding accessibility into procurement, policy, evaluation, and communication processes across the organization.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "definition"
  },
  {
    id: 208,
    question: "Which global initiative by W3C supports policy makers and educators in accessibility implementation?",
    answer: "The Web Accessibility Initiative (WAI).",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "organizations"
  },
  {
    id: 209,
    question: "What is the role of the European Agency for Special Needs and Inclusive Education in accessibility?",
    answer: "It supports policy guidance and training for inclusive education systems across Europe.",
    topic: { id: "education-policy", label: "Inclusive Education Frameworks" },
    category: "organizations"
  },
  {
    id: 210,
    question: "What are ‘maturity levels’ in accessibility programs?",
    answer: "Progressive stages showing how well accessibility is embedded—from awareness to optimization and sustainability.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "definition"
  },
  {
    id: 211,
    question: "Why do organizations need accessibility governance rather than one-off fixes?",
    answer: "Because consistent governance ensures accessibility is maintained across policies, products, procurement, and long-term operations.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 212,
    question: "What is an example of a temporary disability affecting ICT access?",
    answer: "A broken arm that prevents using a mouse, requiring keyboard navigation instead.",
    topic: { id: "assistive-tech", label: "Assistive Technologies & Adaptive Strategies" },
    category: "examples"
  },
  {
    id: 213,
    question: "What is an episodic disability?",
    answer: "A condition where functional limitations appear intermittently, such as flare-ups or episodes that impact access unpredictably.",
    topic: { id: "assistive-tech", label: "Assistive Technologies & Adaptive Strategies" },
    category: "definition"
  },
  {
    id: 214,
    question: "Why must accessibility support both permanent and temporary disabilities?",
    answer: "Because barriers impact many people across different life circumstances, not just those with long-term disabilities.",
    topic: { id: "assistive-tech", label: "Assistive Technologies & Adaptive Strategies" },
    category: "principles"
  },
  {
    id: 215,
    question: "Why is reader mode helpful for cognitive disabilities?",
    answer: "It removes clutter, simplifies layout, and reduces cognitive load, helping users focus on the main content.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 216,
    question: "Which model best explains the need for captions in videos?",
    answer: "The Social Model, because the barrier is created by inaccessible media, not the impairment.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "application"
  },
  {
    id: 217,
    question: "Which model is aligned with providing screen reader compatibility?",
    answer: "The Functional Solutions Model, which emphasizes tools and technologies that enable access.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "application"
  },
  {
    id: 218,
    question: "Which disability model frames accessibility as an investment in workforce productivity?",
    answer: "The Economic Model.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "definition"
  },
  {
    id: 219,
    question: "How would the Cultural Identity Model influence UX research?",
    answer: "It encourages involving culturally specific disability groups, such as Deaf signers, to ensure design respects cultural norms.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "application"
  },
  {
    id: 220,
    question: "Why is perceptible information essential in Universal Design?",
    answer: "Because users need information delivered in multiple modes—visual, verbal, and tactile—to account for diverse perception needs.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 221,
    question: "What UD principle reduces hazards by preventing errors before they occur?",
    answer: "Tolerance for Error.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 222,
    question: "Why is the 'Low Physical Effort' principle important in built environments?",
    answer: "It reduces fatigue and supports people with limited strength, endurance, or mobility.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 223,
    question: "Why do learners benefit from UDL’s multiple means of engagement?",
    answer: "Because it taps into interests, motivation, and emotional investment, improving learning outcomes.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "benefits"
  },
  {
    id: 224,
    question: "What UDL guideline focuses on how information is presented to learners?",
    answer: "Representation.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "principles"
  },
  {
    id: 225,
    question: "Why do organizations pair accessibility and UX research?",
    answer: "Because understanding user emotions and trust helps identify barriers that purely functional testing might miss.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "comparison"
  },
  {
    id: 226,
    question: "What does ‘credibility’ mean in UX according to your notes?",
    answer: "Users trust products that are reliable, consistent, and accessible, shaping their long-term perception.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "definition"
  },
  {
    id: 227,
    question: "Why does usability alone not guarantee accessibility?",
    answer: "A product can be efficient for many users but still exclude people with disabilities unless accessibility principles are applied.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "comparison"
  },
  {
    id: 228,
    question: "What disability affects 200 million people worldwide according to your notes?",
    answer: "Intellectual disability.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "demographics"
  },
  {
    id: 229,
    question: "What percentage of the global population experiences significant disability?",
    answer: "One in six people worldwide.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "demographics"
  },
  {
    id: 230,
    question: "How many people have low vision globally?",
    answer: "About 246 million people.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "demographics"
  },
  {
    id: 231,
    question: "What is the most common cause of vision impairment globally?",
    answer: "Uncorrected refractive errors and cataracts.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "facts"
  },
  {
    id: 232,
    question: "How common is dyslexia?",
    answer: "It affects between 5 and 17% of the population.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "demographics"
  },
  {
    id: 233,
    question: "What percentage of individuals with epilepsy have photosensitive epilepsy?",
    answer: "About 3%.",
    topic: { id: "seizure-disabilities", label: "Seizure Disabilities" },
    category: "demographics"
  },
  {
    id: 234,
    question: "What assistive technology helps individuals with speech impairments communicate?",
    answer: "AAC devices such as text-to-speech or symbol-based communication boards.",
    topic: { id: "speech-language-disabilities", label: "Speech & Language Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 235,
    question: "What AT helps users who cannot operate a mouse due to mobility impairments?",
    answer: "Switch devices, voice control, or alternative keyboards.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "assistive-tech"
  },
  {
    id: 236,
    question: "Why are recruitment practices part of accessibility maturity?",
    answer: "Hiring people with disabilities improves representation and strengthens inclusive decision-making.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 237,
    question: "Which part of the organization typically oversees accessibility policy?",
    answer: "Leadership or governance teams responsible for policy, compliance, and strategic guidance.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 238,
    question: "What is the purpose of evaluating accessibility regularly?",
    answer: "To identify gaps, ensure compliance with standards, and maintain long-term accessibility performance.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 239,
    question: "Why should organizations test prototypes early for accessibility?",
    answer: "Early testing catches issues before development, reducing costs and improving usability.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 240,
    question: "What role does inclusive language play in accessibility?",
    answer: "It respects individuals, avoids harmful stereotypes, and supports positive communication norms.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 241,
    question: "Why does the Social Model support barrier removal in digital products?",
    answer: "Because it identifies inaccessible design—not impairment—as the cause of many participation restrictions.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "application"
  },
  {
    id: 242,
    question: "Which disability model aligns with providing assistive technologies like screen readers?",
    answer: "The Functional Solutions Model, which focuses on tools to offset functional limitations.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "application"
  },
  {
    id: 243,
    question: "How does the Biopsychosocial Model influence support planning?",
    answer: "It encourages combining medical treatment, social supports, and personal goals to improve overall functioning.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "principles"
  },
  {
    id: 244,
    question: "Why is reading comprehension difficult for some users with dyslexia?",
    answer: "Phonological processing differences affect decoding, spelling, and rapid recognition of written words.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 245,
    question: "How can digital design support users with dyscalculia?",
    answer: "Using visual aids, clear layouts, consistent formats, and step-by-step breakdowns of numerical information.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 246,
    question: "Why can cluttered pages create barriers for people with ADHD?",
    answer: "Visual overload can make it harder to focus, track information, and maintain task engagement.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "barriers"
  },
  {
    id: 247,
    question: "What design features help users with autism in digital interfaces?",
    answer: "Predictable layouts, controlled motion, clear labeling, and reduced sensory triggers.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 248,
    question: "Why do some users with intellectual disabilities struggle with navigation?",
    answer: "They may have difficulty with memory, sequencing, and interpreting complex visual or structural patterns.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 249,
    question: "What is a usability strategy that also supports cognitive accessibility?",
    answer: "Chunking information into smaller sections with descriptive headings.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 250,
    question: "How does color contrast support users with low vision?",
    answer: "Higher contrast improves readability and reduces visual strain for text, icons, and controls.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 251,
    question: "Why are keyboard traps a severe accessibility barrier?",
    answer: "They prevent users with mobility or visual impairments from navigating or exiting a component without a mouse.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "barriers"
  },
  {
    id: 252,
    question: "What is an environmental barrier for mobility impairments in public spaces?",
    answer: "Narrow walkways that do not accommodate wheelchairs or mobility devices.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "barriers"
  },
  {
    id: 253,
    question: "Why must interface targets be large for users with tremors?",
    answer: "Small targets increase mis-taps and make digital interactions tiresome or frustrating.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "solutions"
  },
  {
    id: 254,
    question: "What environmental factor can create barriers for HOH users?",
    answer: "Poor acoustics that distort speech or reduce intelligibility.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "barriers"
  },
  {
    id: 255,
    question: "Why do some Deaf users need more than captions?",
    answer: "Captions are written language, but many Deaf individuals primarily communicate through sign language, which has different grammar.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "characteristics"
  },
  {
    id: 256,
    question: "How do haptic alerts support Deaf or Deaf-Blind users?",
    answer: "By providing tactile notifications for events such as alarms or incoming messages.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "assistive-tech"
  },
  {
    id: 257,
    question: "What is an example of a structural barrier affecting Deaf-Blind access?",
    answer: "Digital interfaces without braille support or tactile navigation cues.",
    topic: { id: "deaf-blindness", label: "Deaf-Blindness" },
    category: "barriers"
  },
  {
    id: 258,
    question: "Why must designers reduce flashing content even for users without epilepsy?",
    answer: "Because flashing can still induce discomfort, distraction, or migraines for other users.",
    topic: { id: "seizure-disabilities", label: "Seizure Disabilities" },
    category: "benefits"
  },
  {
    id: 259,
    question: "What psychological barrier can be caused by unpredictable UI behavior?",
    answer: "Anxiety or hesitation, especially among users with mental health-related disabilities.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "barriers"
  },
  {
    id: 260,
    question: "How does predictable design support users with psychological disabilities?",
    answer: "It reduces surprise, uncertainty, and cognitive stress by presenting consistent and stable patterns.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "solutions"
  },
  {
    id: 261,
    question: "What is one etiquette principle for interacting with people with disabilities?",
    answer: "Ask before helping to ensure support respects the individual’s preferences.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 262,
    question: "Why is person-first or identity-first language important?",
    answer: "It reflects how individuals prefer to describe themselves and promotes dignity and agency.",
    topic: { id: "disability-demographics-etiquette", label: "Disability Demographics & Etiquette" },
    category: "principles"
  },
  {
    id: 263,
    question: "Why is the CRPD considered a human-rights milestone?",
    answer: "It legally binds governments to protect accessibility, participation, and equality for people with disabilities.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "benefits"
  },
  {
    id: 264,
    question: "What is one way NGOs support CRPD enforcement?",
    answer: "They submit alternative reports that highlight unmet obligations or unresolved barriers.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "monitoring"
  },
  {
    id: 265,
    question: "Which procurement law requires U.S. federal agencies to buy accessible ICT?",
    answer: "Section 508 of the Rehabilitation Act.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "facts"
  },
  {
    id: 266,
    question: "How does EN 301 549 influence accessibility in the EU?",
    answer: "It defines ICT accessibility criteria for public procurement, ensuring accessible digital products across member states.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "law-requirements"
  },
  {
    id: 267,
    question: "Why is accessibility training necessary for entire organizations?",
    answer: "Because accessibility responsibilities span design, content, policy, procurement, and development teams.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 268,
    question: "How does accessibility reduce legal and financial risk?",
    answer: "By preventing discrimination claims and avoiding costly remediation of inaccessible systems.",
    topic: { id: "benefits-of-accessibility", label: "Benefits of Accessibility" },
    category: "benefits"
  },
  {
    id: 269,
    question: "Why is documenting accessibility decisions important?",
    answer: "It ensures transparency, consistency, and accountability across teams and future updates.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 270,
    question: "Which WCAG principle focuses on reducing user confusion?",
    answer: "Understandable, which requires clear instructions, predictable behavior, and readable content.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 271,
    question: "Why is organizational leadership essential for long-term accessibility success?",
    answer: "Because leadership sets priorities, allocates resources, and communicates that accessibility is an organizational commitment, not a single-team responsibility.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 272,
    question: "How does the Social Model redefine disability in digital contexts?",
    answer: "It shifts focus from the impairment to the inaccessible design choices that prevent full participation.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "principles"
  },
  {
    id: 273,
    question: "Which disability model explains why accessibility testing benefits everyone?",
    answer: "The Economic Model, because it emphasizes the broad societal advantages and return on investment from inclusive design.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "benefits"
  },
  {
    id: 274,
    question: "Why are transcripts critical for users with auditory processing disorders?",
    answer: "They allow users to review content at their own pace and bypass the need to process complex audio streams in real time.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "solutions"
  },
  {
    id: 275,
    question: "How can designers reduce barriers for users with intellectual disabilities?",
    answer: "By simplifying instructions, using clear icons, providing step-by-step flows, and reducing ambiguity.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 276,
    question: "What is a digital barrier that might affect users with motor impairments?",
    answer: "Interfaces requiring precise dragging, pinching, or two-finger gestures they may not be able to perform.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "barriers"
  },
  {
    id: 277,
    question: "Why is simple language important for accessibility?",
    answer: "Because it supports users with cognitive, intellectual, linguistic, and psychological disabilities by reducing processing demands.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 278,
    question: "How do tactile graphics help users with visual disabilities?",
    answer: "They convey spatial or graphical information through touch, enabling understanding of diagrams and maps.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "assistive-tech"
  },
  {
    id: 279,
    question: "Why must organizations test digital forms with assistive technologies?",
    answer: "Because AT users rely on proper labels, roles, instructions, and predictable focus order to complete tasks successfully.",
    topic: { id: "assistive-tech", label: "Assistive Technologies & Adaptive Strategies" },
    category: "principles"
  },
  {
    id: 280,
    question: "Which disability group benefits most from consistent heading structure?",
    answer: "Screen reader users, who navigate content non-visually using semantic structure.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 281,
    question: "Why does ‘Operable’ in WCAG emphasize keyboard access?",
    answer: "Because many users cannot use a mouse due to visual, motor, or temporary mobility impairments.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 282,
    question: "What happens when content is understandable but not perceivable?",
    answer: "Users know how to interact with it, but cannot perceive it through sight, sound, or touch, making it functionally inaccessible.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "comparison"
  },
  {
    id: 283,
    question: "How does the Robust principle support long-term accessibility?",
    answer: "It ensures content remains usable across current and future assistive technologies.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 284,
    question: "Why is EN 301 549 considered a harmonized standard?",
    answer: "Because it aligns accessibility requirements across EU countries to support uniform procurement practices.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "context"
  },
  {
    id: 285,
    question: "Which international treaty focuses specifically on access to cultural and educational works?",
    answer: "The Marrakesh Treaty.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "definition"
  },
  {
    id: 286,
    question: "Why does the CRPD require reporting cycles?",
    answer: "To ensure governments demonstrate progress, identify gaps, and remain accountable to disability communities.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "monitoring"
  },
  {
    id: 287,
    question: "What is the value of alternative (shadow) reports under the CRPD?",
    answer: "They provide independent evidence from NGOs that can reveal issues governments may overlook or downplay.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "monitoring"
  },
  {
    id: 288,
    question: "Why do some Deaf individuals prefer sign language interpreters over captions?",
    answer: "Because sign language has its own grammar and structure, and captions may not reflect nuances they rely on.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "characteristics"
  },
  {
    id: 289,
    question: "Why must web animations include motion-reduction features?",
    answer: "To avoid triggering nausea, vertigo, or distraction among users sensitive to motion.",
    topic: { id: "psychological-disabilities", label: "Psychological Disabilities" },
    category: "barriers"
  },
  {
    id: 290,
    question: "What aspect of UD supports people with arthritis using physical interfaces?",
    answer: "Low Physical Effort, which minimizes strain during interactions.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 291,
    question: "Why does the principle of Equitable Use matter in UD?",
    answer: "It ensures that all users, regardless of ability, can use the design without segregation or stigma.",
    topic: { id: "universal-design", label: "Universal Design (UD)" },
    category: "principles"
  },
  {
    id: 292,
    question: "How does UDL support learners with language-processing disabilities?",
    answer: "By providing multiple modes of representation such as audio, simplified text, and visual supports.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "solutions"
  },
  {
    id: 293,
    question: "Why is multiple means of expression a UDL requirement?",
    answer: "Learners vary in how they communicate, and offering alternatives ensures equal opportunity to demonstrate mastery.",
    topic: { id: "universal-design-for-learning", label: "Universal Design for Learning (UDL)" },
    category: "principles"
  },
  {
    id: 294,
    question: "Which UX element helps reinforce trust for users with cognitive disabilities?",
    answer: "Clear instructions, predictable navigation, and consistent patterns that reduce confusion.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "principles"
  },
  {
    id: 295,
    question: "Why should organizations avoid relying exclusively on automated accessibility testing?",
    answer: "Because automated tools only detect a portion of issues, missing many problems affecting real users with disabilities.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "barriers"
  },
  {
    id: 296,
    question: "Why is including people with disabilities in user research essential?",
    answer: "Their lived experience helps identify barriers that cannot be found through automated or theoretical testing alone.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 297,
    question: "What is a common misconception about accessibility and compliance?",
    answer: "That meeting WCAG automatically ensures a good user experience, even though usability needs may go beyond compliance.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "comparison"
  },
  {
    id: 298,
    question: "Why should accessibility be treated as a shared organizational responsibility?",
    answer: "Because content creators, designers, developers, procurement specialists, and leadership all influence accessibility outcomes.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 299,
    question: "What does it mean when a law includes an 'undue burden' clause?",
    answer: "Organizations must provide accommodations unless the cost or difficulty becomes unreasonable for their context.",
    topic: { id: "legal-terms", label: "Accessibility Law Terms" },
    category: "definition"
  },
  {
    id: 300,
    question: "What does 'reasonable accommodation' require?",
    answer: "Making necessary modifications to ensure equal access without imposing disproportionate hardship.",
    topic: { id: "legal-terms", label: "Accessibility Law Terms" },
    category: "definition"
  },
  {
    id: 301,
    question: "Which disability model identifies societal structures as the primary source of discrimination?",
    answer: "The Social Model, which argues that exclusion arises from inaccessible environments rather than impairments.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "principles"
  },
  {
    id: 302,
    question: "Why is the Medical Model insufficient on its own for accessibility work?",
    answer: "Because it focuses on the individual’s impairment rather than the external barriers accessibility aims to remove.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "weaknesses"
  },
  {
    id: 303,
    question: "How does the Economic Model support business cases for accessibility?",
    answer: "It highlights productivity gains, market expansion, and reduced remediation costs as benefits of accessible design.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "benefits"
  },
  {
    id: 304,
    question: "What is a key strength of the Functional Solutions Model?",
    answer: "It focuses on practical interventions like AT that directly support independence and access.",
    topic: { id: "models-of-disability", label: "Models of Disability" },
    category: "benefits"
  },
  {
    id: 305,
    question: "Why does intellectual disability require simplified digital flows?",
    answer: "Because users may have difficulty processing complex text, multi-step tasks, or rapid information changes.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "characteristics"
  },
  {
    id: 306,
    question: "What barrier commonly affects people with language-processing disabilities?",
    answer: "Dense, formal, or ambiguous text that increases cognitive load and slows comprehension.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "barriers"
  },
  {
    id: 307,
    question: "How can digital platforms support users with short-term memory limitations?",
    answer: "By providing clear progress indicators, consistent patterns, and cues that reduce reliance on memory.",
    topic: { id: "cognitive-disabilities", label: "Cognitive Disabilities" },
    category: "solutions"
  },
  {
    id: 308,
    question: "Why do some users with motor impairments rely on voice interfaces?",
    answer: "Because speaking replaces fine motor control required for tapping, dragging, or using a mouse.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "assistive-tech"
  },
  {
    id: 309,
    question: "What AT helps users with severe mobility limitations who cannot use keyboards?",
    answer: "Switch devices or scanning interfaces, which allow single-input control.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "assistive-tech"
  },
  {
    id: 310,
    question: "Why is high color contrast essential for users with low vision?",
    answer: "It improves text readability, shape recognition, and reduces eye strain when interfaces are magnified.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 311,
    question: "Why must diagrams include text alternatives for blind users?",
    answer: "Because images alone do not convey meaning to screen reader or braille display users.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "barriers"
  },
  {
    id: 312,
    question: "What feature allows screen-reader users to skim content efficiently?",
    answer: "Semantic headings, which enable quick navigation through structured sections.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 313,
    question: "Why is microphone quality a barrier for HOH users in virtual meetings?",
    answer: "Poor audio clarity makes speech harder to understand or caption accurately.",
    topic: { id: "auditory-disabilities", label: "Auditory Disabilities" },
    category: "barriers"
  },
  {
    id: 314,
    question: "How does the CRPD define accessibility?",
    answer: "As ensuring independence, equal participation, and access to environments, information, and communications.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "definition"
  },
  {
    id: 315,
    question: "Why does the CRPD emphasize removing attitudinal barriers?",
    answer: "Because bias and stigma often limit participation as much as physical or digital barriers.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "principles"
  },
  {
    id: 316,
    question: "Why does the UN require states to submit CRPD progress reports?",
    answer: "To review compliance, identify areas of improvement, and ensure international accountability.",
    topic: { id: "international-instruments", label: "International Rights Instruments" },
    category: "monitoring"
  },
  {
    id: 317,
    question: "What is the purpose of WCAG 'success criteria'?",
    answer: "They provide measurable checkpoints for determining whether content meets accessibility requirements.",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "definition"
  },
  {
    id: 318,
    question: "Why is WCAG technology-agnostic?",
    answer: "So it applies across different platforms, devices, and technologies as digital environments evolve.",
    topic: { id: "standards", label: "Accessibility Standards" },
    category: "principles"
  },
  {
    id: 319,
    question: "Why must accessible ICT be procured at the organizational level?",
    answer: "Because inaccessible purchases create systemic barriers, forcing costly retrofits or workarounds.",
    topic: { id: "procurement", label: "Procurement Laws" },
    category: "principles"
  },
  {
    id: 320,
    question: "What is one reason organizations adopt accessibility maturity models?",
    answer: "To track advancement from reactive compliance toward proactive, integrated accessibility culture.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "benefits"
  },
  {
    id: 321,
    question: "Why should accessibility successes be shared internally?",
    answer: "Because celebrating improvements reinforces motivation and organizational buy-in.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 322,
    question: "How do training programs contribute to accessibility maturity?",
    answer: "They establish a shared baseline knowledge so all teams understand expectations and their responsibilities.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "solutions"
  },
  {
    id: 323,
    question: "What accessibility barrier might arise from poorly structured PDFs?",
    answer: "Screen readers may not detect reading order or headings, making content difficult or impossible to navigate.",
    topic: { id: "assistive-tech", label: "Assistive Technologies & Adaptive Strategies" },
    category: "barriers"
  },
  {
    id: 324,
    question: "Why should emergency communications be provided in multiple formats?",
    answer: "Because people may need visual, auditory, or tactile channels to understand urgent information.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
  {
    id: 325,
    question: "How do alt-text and captions support different user groups?",
    answer: "Alt text supports blind users, while captions support Deaf and HOH users—each addressing distinct access needs.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "comparison"
  },
  {
    id: 326,
    question: "Why does usability testing alone fail to ensure accessibility?",
    answer: "It often excludes AT users and cannot detect barriers related to semantics, navigation, or perceptibility.",
    topic: { id: "accessibility-usability-ux", label: "Accessibility, Usability & UX" },
    category: "comparison"
  },
  {
    id: 327,
    question: "Why is alt text not required for purely decorative images?",
    answer: "Because providing empty alt text correctly hides meaningless visuals from screen readers, reducing noise.",
    topic: { id: "visual-disabilities", label: "Visual Disabilities" },
    category: "solutions"
  },
  {
    id: 328,
    question: "Which WCAG principle addresses input assistance and error prevention?",
    answer: "Understandable, which requires helping users avoid and correct mistakes.",
    topic: { id: "wcag-principles", label: "WCAG Principles (POUR)" },
    category: "principles"
  },
  {
    id: 329,
    question: "Why must complex gestures have simple alternatives?",
    answer: "To accommodate users who cannot perform multi-touch or fine motor interactions.",
    topic: { id: "mobility-flexibility-body-structure", label: "Mobility, Flexibility & Body Structure" },
    category: "solutions"
  },
  {
    id: 330,
    question: "Why is accessible communication essential in organizations?",
    answer: "Because staff and customers depend on information that is perceivable, understandable, and delivered in usable formats.",
    topic: { id: "organizational-integration", label: "Accessibility Governance & Maturity" },
    category: "principles"
  },
];

export default flashcards;