// Content Configuration
// Edit this file to update website content easily

const SITE_CONTENT = {
    // Site metadata
    meta: {
        title: "Sharon Webster - Senior UX Researcher",
        description: "Sharon Webster is a Senior UX Researcher & Insight Strategist specialising in mixed-methods research, inclusive design, and strategic user insights.",
        author: "Sharon Webster"
    },
    
    // Navigation
    navigation: {
        logo: "Sharon Webster",
        links: [
            { text: "About", href: "#about" },
            { text: "Work", href: "#work" },
            { text: "Contact", href: "#contact" }
        ]
    },
    
    // Hero section
    hero: {
        title: "Senior UX Researcher",
        subtitle: "Insight Strategist | Inclusive Design Advocate",
        description: "I empower teams to make data-driven decisions through mixed-methods research, turning user insights into strategic guidance that drives meaningful outcomes.",
        primaryCTA: {
            text: "View My Work",
            href: "#work"
        },
        secondaryCTA: {
            text: "Get In Touch",
            href: "#contact"
        },
        profileImage: {
            src: "images/sharon-profile.jpg",
            alt: "Sharon Webster"
        }
    },
    
    // About section
    about: {
        title: "About Me",
        leadText: "SC-cleared Senior UX Researcher with over 12 years of expertise leading insight-driven research that shapes products, services, and strategy across sectors.",
        description: "My mission is to make things better for more people through accessible and inclusive research. I specialise in aligning user insights with business priorities to enable fast, confident, and customer-focussed decision-making.",
        skills: {
            title: "Core Expertise",
            items: [
                "Mixed-methods UX research (remote/in-person)",
                "Research strategy and operations",
                "Accessibility and inclusive design",
                "Stakeholder engagement and management",
                "Storytelling for influence",
                "Agile team collaboration"
            ]
        },
        stats: [
            {
                number: "12+",
                label: "Years Experience"
            },
            {
                number: "200+",
                label: "Stakeholders Engaged"
            },
            {
                number: "77",
                label: "Actionable Outcomes"
            }
        ]
    },
    
    // Work section
    work: {
        title: "Selected Work",
        subtitle: "Case studies showcasing my approach to user research and problem-solving",
        caseStudies: [
            {
                title: "Choosing an Appropriate Method for Research",
                description: "Designed innovative contextual research approach for fuel payment app, combining in-car interviews with real-world usability testing to uncover barriers to app adoption.",
                image: {
                    src: "images/fuel-payment-app.jpg",
                    alt: "Fuel Payment App Research"
                },
                tags: ["Contextual Inquiry", "Usability Testing", "Stakeholder Engagement"],
                link: "case-studies/fuel-payment-research.html"
            },
            {
                title: "Informing Strategy Through User-Centric Insights",
                description: "Led comprehensive research program for mental healthcare digital strategy, conducting 15 interviews and 16 workshops with 200+ service providers, resulting in 77 actionable recommendations.",
                image: {
                    src: "images/mental-health-strategy.jpg",
                    alt: "Mental Health Digital Strategy"
                },
                tags: ["Strategic Research", "Workshop Facilitation", "Stakeholder Alignment"],
                link: "case-studies/mental-health-strategy.html"
            },
            {
                title: "Designing Research for People with Disabilities",
                description: "Conducted inclusive research with people with hearing loss and autism to identify travel barriers, implementing robust safeguarding practices and creating 128 actionable insights for accessibility improvements.",
                image: {
                    src: "images/accessibility-travel.jpg",
                    alt: "Accessibility in Travel Research"
                },
                tags: ["Inclusive Research", "Accessibility", "Safeguarding"],
                link: "case-studies/accessibility-travel.html"
            },
            {
                title: "Creating Effective Data-Driven Information Architecture",
                description: "Redesigned financial advisor portal IA using card sorting and tree testing, achieving 46% improvement in findability through iterative testing and user-centered design principles.",
                image: {
                    src: "images/information-architecture.jpg",
                    alt: "Data-Driven Information Architecture"
                },
                tags: ["Information Architecture", "Card Sorting", "Tree Testing"],
                link: "case-studies/information-architecture.html"
            },
            {
                title: "Booking Calendar Redesign",
                description: "Improved National Trust holiday cottage booking experience through user research and iterative design, increasing checkout completion rate from 21% to 34% through better communication of booking rules.",
                image: {
                    src: "images/national-trust-calendar.jpg",
                    alt: "National Trust Booking Calendar"
                },
                tags: ["Usability Testing", "Conversion Optimization", "Iterative Design"],
                link: "case-studies/booking-calendar.html"
            }
        ]
    },
    
    // Contact section
    contact: {
        title: "Let's Work Together",
        subtitle: "Ready to turn user insights into strategic advantages?",
        description: "I'm always interested in discussing how user research can drive your next project. Whether you need strategic insights, inclusive design consultation, or research operations support, I'd love to hear from you.",
        contactInfo: [
            {
                label: "Email",
                value: "sharon@cognite.net",
                href: "mailto:sharon@cognite.net"
            },
            {
                label: "Phone",
                value: "07813 177456",
                href: "tel:+447813177456"
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/sharon-webster-ux",
                href: "https://linkedin.com/in/sharon-webster-ux"
            },
            {
                label: "Location",
                value: "Mortimer, RG7 3UY",
                href: null
            }
        ],
        primaryCTA: {
            text: "Get In Touch",
            href: "mailto:sharon@cognite.net"
        }
    },
    
    // Footer
    footer: {
        copyright: "© 2025 Sharon Webster. All rights reserved."
    }
};

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONTENT;
}