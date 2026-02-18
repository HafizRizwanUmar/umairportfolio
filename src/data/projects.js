const projects = [
    {
        id: 1,
        slug: "golden-hour-portraits",
        title: "Golden Hour Portraits",
        category: "Portrait",
        date: "November 2025",
        client: "Ayesha Malik",
        location: "Lahore, Pakistan",
        duration: "2 Days",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "large",
        description: "A golden hour portrait session capturing the warmth and grace of natural light. Shot during the magical last hour before sunset, this series celebrates the subject's personality through soft, cinematic tones and intimate framing.",
        challenge: "The golden hour window is extremely narrow — roughly 45 minutes of usable light. We needed to capture a diverse set of moods and compositions while moving between three locations before the light faded completely.",
        approach: "I planned the shoot meticulously around the sun's trajectory, pre-scouted each location, and used reflectors to bounce warm light into shadows. I paired a 85mm f/1.4 prime for close-ups with a 35mm for environmental shots, maintaining a shallow depth of field throughout.",
        result: "The final gallery of 48 edited images received overwhelming praise from the client and was featured on two photography blogs. The series has since become one of my most requested portrait styles.",
        tools: ["Sony A7IV", "85mm f/1.4", "35mm f/1.4", "Reflector", "Lightroom", "Capture One"]
    },
    {
        id: 2,
        slug: "urban-geometry",
        title: "Urban Geometry",
        category: "Street",
        date: "September 2025",
        client: "Personal Project",
        location: "Karachi, Pakistan",
        duration: "1 Week",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "small",
        description: "An exploration of Karachi's urban landscape, finding beauty in geometric patterns formed by modern architecture, street grids, and the interplay of light and concrete. This personal project documents the city's evolving skyline.",
        challenge: "Karachi's bustling streets made it difficult to isolate clean geometric compositions. I had to work around heavy traffic, unpredictable weather, and find the right time of day when shadows created the most dramatic lines.",
        approach: "I shot primarily during early morning when streets were quieter and the low sun angle created long, dramatic shadows. Using a wide-angle 16-35mm lens, I focused on leading lines, symmetry, and repetitive patterns in the architecture.",
        result: "The series of 35 images was exhibited at a local gallery and shared widely on social media, attracting attention from architecture magazines. It reinforced my belief that extraordinary compositions exist in everyday places.",
        tools: ["Sony A7IV", "16-35mm f/2.8", "Polarizing Filter", "Lightroom", "Silver Efex Pro"]
    },
    {
        id: 3,
        slug: "mountain-serenity",
        title: "Mountain Serenity",
        category: "Landscape",
        date: "July 2025",
        client: "Pakistan Tourism Board",
        location: "Hunza Valley, Pakistan",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "small",
        description: "A 5-day expedition through the breathtaking Hunza Valley, capturing the raw majesty of Pakistan's northern mountains. From the towering Rakaposhi peak to the turquoise Attabad Lake, this series showcases nature at its most awe-inspiring.",
        challenge: "Shooting at high altitudes brought extreme cold, rapidly changing weather, and physical exhaustion from hiking to remote vantage points. Cloud cover was unpredictable, requiring patience and flexibility in our shooting schedule.",
        approach: "I woke before dawn each day for blue hour shoots and stayed past sunset for the afterglow. I used graduated ND filters to balance bright skies with shadowed valleys, and focus-stacked for maximum sharpness from foreground to infinity.",
        result: "The tourism board used 12 images from this series in their national campaign. The work was also published in a travel magazine and has become a signature part of my landscape portfolio.",
        tools: ["Sony A7RV", "16-35mm f/2.8", "70-200mm f/2.8", "ND Filters", "Tripod", "Lightroom"]
    },
    {
        id: 4,
        slug: "a-wedding-story",
        title: "A Wedding Story",
        category: "Wedding",
        date: "January 2026",
        client: "Ali & Fatima",
        location: "Islamabad, Pakistan",
        duration: "3 Days",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "small",
        description: "A three-day wedding celebration captured with a cinematic, documentary approach. From the intimate mehndi ceremony to the grand walima reception, every emotion and detail was preserved with warmth and authenticity.",
        challenge: "Multi-day weddings involve constant movement, varying lighting conditions (from outdoor mehndi to dimly lit indoor venues), and hundreds of guests. Capturing genuine candid moments while ensuring all key rituals were documented required immense focus.",
        approach: "I worked with a second shooter to ensure full coverage. I used fast primes (f/1.2 and f/1.4) for low-light reception shots, and off-camera flash for the formal portraits. My editing emphasized warm, golden tones to match the celebration's energy.",
        result: "Ali & Fatima received over 500 edited images and a custom 40-page album. The couple's feedback was deeply emotional — they said the photos transported them right back to each moment. This project was shared across their family networks, generating multiple referrals.",
        tools: ["Sony A7IV", "Sony A7III (2nd body)", "50mm f/1.2", "85mm f/1.4", "Godox V1 Flash", "Lightroom"]
    },
    {
        id: 5,
        slug: "the-brand-identity",
        title: "The Brand Identity",
        category: "Commercial",
        date: "December 2025",
        client: "Noor Fragrances",
        location: "Studio, Lahore",
        duration: "1 Day",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "small",
        description: "A premium product photography session for Noor Fragrances' new luxury line. The goal was to create imagery that communicates elegance, sophistication, and the sensory experience of each fragrance — all through visuals alone.",
        challenge: "Glass perfume bottles are notoriously difficult to photograph — they create reflections, show fingerprints easily, and require precise lighting to reveal their shape and the liquid inside. Each bottle also had unique characteristics that needed tailored setups.",
        approach: "I built custom light setups for each product using strip boxes, honeycomb grids, and black flags to control reflections. Acrylic sheets and colored gels were used for creative gradient backgrounds. Each shot was focus-stacked for front-to-back sharpness.",
        result: "The brand used the images across their e-commerce platform, social media, and print advertising. The campaign contributed to a 40% increase in online engagement during the launch month.",
        tools: ["Sony A7RV", "90mm f/2.8 Macro", "Godox AD400Pro", "Strip Boxes", "Acrylic Sheets", "Capture One"]
    },
    {
        id: 6,
        slug: "ethereal-mood",
        title: "Ethereal Mood",
        category: "Editorial",
        date: "October 2025",
        client: "MUSE Magazine",
        location: "Margalla Hills, Islamabad",
        duration: "1 Day",
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
        ],
        size: "large",
        description: "An editorial fashion shoot for MUSE Magazine exploring the concept of ethereal beauty in nature. The series blends high fashion with organic landscapes, creating a surreal visual narrative of flowing fabrics against the misty Margalla Hills.",
        challenge: "The editorial required early-morning fog for the desired mood, which was weather-dependent and unpredictable. We also had to coordinate a team of stylists, makeup artists, and models while dealing with uneven terrain on the hillside trails.",
        approach: "We began at 5 AM to catch the morning mist. I used a combination of natural backlighting through the fog and subtle fill flash. Compositions were designed to let the landscape and wardrobe interact — flowing fabrics catching wind, models integrated into the natural scene.",
        result: "The editorial spread across 6 pages of MUSE Magazine's winter issue. The series was praised for its dreamlike quality and became one of the most shared features from that issue on social media.",
        tools: ["Sony A7IV", "35mm f/1.4", "85mm f/1.4", "Godox V1 Flash", "Smoke Machine", "Lightroom"]
    }
];

export default projects;
