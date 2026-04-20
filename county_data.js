var countyData = {
    "Dublin": {
        count: 2,
        womenCount: 2,
        figures: [
            {
                name: "Countess Constance Markievicz",
                category: "woman",
                dates: "1868 – 1927",
                bio: "A revolutionary icon, she was second-in-command at St. Stephen's Green in 1916. She became the first woman elected to the British House of Commons and served as Minister for Labour in the First Dáil, bridging the gap between aristocratic privilege and radical socialism.",
                works: ["Prison Letters"],
                image: "images/markievicz.jpg"
            },
            {
                name: "Maud Gonne",
                category: "woman",
                dates: "1866 – 1953",
                bio: "An actress and radical nationalist who founded Inghinidhe na hÉireann to involve women in the struggle. She was a tireless campaigner for political prisoners and a symbolic 'Joan of Arc' for the Irish cause, inspiring much of Yeats's nationalist poetry.",
                works: ["The Autobiography of Maud Gonne"],
                image: "images/gonne.jpg" 
            }
        ]
    },
    "Sligo": {
        count: 2,
        womenCount: 1,
        figures: [
            {
                name: "W.B. Yeats",
                category: "general",
                dates: "1865 – 1939",
                bio: "The guiding light of the Irish Literary Revival. Yeats believed that political freedom required a cultural awakening. His plays at the Abbey Theatre and his poetry revived Irish mythology, providing the 'spiritual' fuel that motivated the leaders of the 1916 Rising.",
                works: ["The Lake Isle of Innisfree", "Easter, 1916", "The Second Coming"],
                image: "images/yeats.jpg"
            },
            {
                name: "Eva Gore-Booth",
                category: "woman",
                dates: "1870 – 1926",
                bio: "Sister of Constance Markievicz, she was a pivotal poet and labor activist. She used her platform to advocate for women’s suffrage and social justice, and was instrumental in the international campaign to save her sister from execution after 1916.",
                works: ["The Agate Lamp", "The Death of Fionavar"],
                image: "images/booth.jpg"
            }
        ]
    },
    "Galway": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Lady Gregory",
            category: "woman",
            dates: "1852 – 1932",
            bio: "Co-founder of the Abbey Theatre and a key folklorist. By gathering oral histories from rural Galway, she helped rebuild a distinct Irish cultural identity that challenged colonial narratives and empowered the nationalist movement.",
            works: ["Cathleen Ni Houlihan", "The Rising of the Moon"],
            image: "images/gregory.jpg"
        }]
    },
    "Derry": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Brian Friel",
            category: "general",
            dates: "1929 – 2015",
            bio: "Often called the 'Irish Chekhov,' Friel examined the impact of British colonization on the Irish language and identity. His play 'Translations' is a foundational text in understanding the cultural dispossession of the Irish people.",
            works: ["Translations", "The Freedom of the City"],
            image: "images/friel.jpg"
        }]
    },
    "Donegal": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Séamus Ó Grianna",
            category: "general",
            dates: "1889 – 1969",
            bio: "A fierce defender of the Gaelic tongue, his writing from the Rosses ensured that the traditional Irish life was preserved against total anglicization. He viewed the language as the final bastion of the Irish nation's soul.",
            works: ["Rann na Feirste"],
            image: "images/seamus.jpg"
        }]
    },
    "Mayo": {
        count: 2,
        womenCount: 1,
        figures: [
            {
                name: "Michael Davitt",
                category: "general",
                dates: "1846 – 1906",
                bio: "The revolutionary founder of the Land League. Davitt connected the struggle for land with the struggle for nationhood, mobilizing the peasantry to break the landlord system—the economic backbone of British rule in Ireland.",
                works: ["The Fall of Feudalism in Ireland"],
                image: "images/davitt.jpg"
            },
            {
                name: "Margaret Buckley",
                category: "woman",
                dates: "1879 – 1962",
                bio: "A dedicated Republican who became the first female leader of a major Irish political party (Sinn Féin). She was crucial in establishing the 'Republican Courts' that successfully bypassed British law during the War of Independence.",
                works: ["The Jangle of the Keys"],
                image: "images/buckely.jpg"
            }
        ]
    },
    "Kerry": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Daniel O'Connell",
            category: "general",
            dates: "1775 – 1847",
            bio: "The 'Liberator' achieved Catholic Emancipation through non-violent mass mobilization. He proved that the Irish people could be a disciplined political force, paving the way for every constitutional movement that followed.",
            works: ["Legal & Political Orations"],
            image: "images/oconnell.jpg"
        }]
    },
    "Leitrim": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "John McGahern",
            category: "general",
            dates: "1934 – 2006",
            bio: "A master of the Irish novel, McGahern provided a sobering look at the reality of rural Ireland after independence, challenging the myths of the state and exploring the deep connections between the people and the land.",
            works: ["Amongst Women", "The Barracks"],
            image: "images/mcgahern.jpg"
        }]
    },
    "Roscommon": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Douglas Hyde",
            category: "general",
            dates: "1860 – 1949",
            bio: "The first President of Ireland and founder of the Gaelic League. Hyde argued that political freedom was empty without a distinct cultural identity rooted in the Irish language, sparking the national revival that led to 1916.",
            works: ["A Literary History of Ireland"],
            image: "images/hyde.jpg"
        }]
    },
    "Cork": {
        count: 2,
        womenCount: 1,
        figures: [
            {
                name: "Thomas Crofton Croker",
                category: "general",
                dates: "1798 – 1854",
                bio: "His collection of Irish folklore saved many ancient traditions from being erased by colonial influence. His work provided the raw material used by the next generation of writers to define a unique Irish heritage.",
                works: ["Researches in the South of Ireland"],
                image: "images/croker.jpg"
            },
            {
                name: "Mary MacSwiney",
                category: "woman",
                dates: "1872 – 1942",
                bio: "An uncompromising Republican and international diplomat. After the hunger strike death of her brother Terence, she became a globally recognized symbol of Irish resistance, refusing any compromise with the British Empire.",
                works: ["Founder of St. Ita's School"],
                image: "images/macswiney.jpg"
            }
        ]
    },
    "Longford": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Padraic Colum",
            category: "general",
            dates: "1881 – 1972",
            bio: "A central figure in the Literary Revival and co-founder of the Abbey Theatre. He gave a voice to the Irish peasantry in drama and preserved countless legends for the children of the new Republic.",
            works: ["A Treasury of Irish Folklore", "The King of Ireland's Son"],
            image: "images/colum.jpg"
        }]
    },
    "Waterford": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Thomas Francis Meagher",
            category: "general",
            dates: "1823 – 1867",
            bio: "Meagher first introduced the Irish Tricolour, symbolizing peace between the Orange and the Green. His belief that liberty might require the sword made him a foundational figure for physical-force nationalism.",
            works: ["Speeches from the Dock"],
            image: "images/meagher.jpg"
        }]
    },
    "Westmeath": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Oliver Goldsmith",
            category: "general",
            dates: "1728 – 1774",
            bio: "A writer who used his work to critique the injustices of the landlord system. His descriptions of the 'deserted' Irish village highlighted the human cost of colonial land policies.",
            works: ["The Deserted Village", "She Stoops to Conquer"],
            image: "images/goldsmith.jpg"
        }]
    },
    "Wexford": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Thomas Cloney",
            category: "general",
            dates: "1774 – 1850",
            bio: "A general in the 1798 Rebellion. Cloney's memoirs of the uprising at Vinegar Hill kept the flame of Republicanism alive for the generations that eventually achieved independence in the 20th century.",
            works: ["A Personal Narrative of 1798"],
            image: "images/cloney.jpg"
        }]
    },
    "Cavan": {
        count: 2,
        womenCount: 1,
        figures: [
            {
                name: "Francis Ledwidge",
                category: "general",
                dates: "1887 – 1917",
                bio: "The 'Poet of the Blackbirds,' who died in WWI. His work bridged the gap between Irish service in the British army and the local nationalist struggle, famously mourning the execution of the 1916 leaders.",
                works: ["Songs of the Fields"],
                image: "images/ledwidge.jpg"
            },
            {
                name: "Agnes O'Farrelly",
                category: "woman",
                dates: "1874 – 1951",
                bio: "A founder of Cumann na mBan and a leader in the Gaelic League. She was essential in organizing women to play an active, military-auxiliary role in the struggle for the Republic.",
                works: ["The Reign of Humbug"],
                image: "images/ofarrely.jpg"
            }
        ]
    },
    "Limerick": {
        count: 2,
        womenCount: 1,
        figures: [
            {
                name: "Con Colbert",
                category: "general",
                dates: "1888 – 1916",
                bio: "A leader of the 1916 Rising and member of the IRB. His execution at Kilmainham Gaol made him a martyr for the cause, turning the tide of public opinion in favor of complete independence.",
                works: ["Revolutionary Writings"],
                image: "images/colbert.jpg"
            },
            {
                name: "Kathleen Clarke",
                category: "woman",
                dates: "1878 – 1972",
                bio: "A founding member of Cumann na mBan and the widow of Tom Clarke. She managed the Prisoners' Dependants Fund during the revolution and later became the first female Lord Mayor of Dublin.",
                works: ["My Fight for Ireland's Freedom"],
                image: "images/clarke.jpg"
            }
        ]
    },
    "Monaghan": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Patrick Kavanagh",
            category: "general",
            dates: "1904 – 1967",
            bio: "Kavanagh provided a necessary reality check to the romanticized myths of the Literary Revival, portraying the raw and spiritual depth of the Monaghan soil and the common people.",
            works: ["The Great Hunger", "On Raglan Road"],
            image: "images/kavanagh.jpg"
        }]
    },
    "Fermanagh": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "John Montague",
            category: "general",
            dates: "1929 – 2016",
            bio: "A giant of contemporary poetry, his work explored the deep historical wounds of the Ulster Plantation and the divided sense of identity in the North of Ireland.",
            works: ["The Rough Field", "The Dead Kingdom"],
            image: "images/montague.jpg"
        }]
    },
    "Tipperary": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "John O'Leary",
            category: "general",
            dates: "1830 – 1907",
            bio: "A Fenian leader who mentored the 1916 generation. He insisted that the revolutionary movement maintain a high moral code, famously stating that 'there are things a man must not do to save a nation.'",
            works: ["Recollections of Fenians and Fenianism"],
            image: "images/oleary.jpg"
        }]
    },
    "Tyrone": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Flann O'Brien",
            category: "general",
            dates: "1911 – 1966",
            bio: "A master satirist who used his wit to critique the state of post-independence Ireland. His linguistic playfulness and dark humor challenged the rigid structures of the new Republic.",
            works: ["At Swim-Two-Birds", "The Third Policeman"],
            image: "images/obrien.jpg"
        }]
    },
    "Kilkenny": {
        count: 2,
        womenCount: 0,
        figures: [
            {
                name: "John Banim",
                category: "general",
                dates: "1798 – 1842",
                bio: "A pioneer of Irish fiction who sought to explain the plight of the Irish peasantry to the world, creating a foundation for the later cultural and political movements.",
                works: ["The O'Hara Family Tales"],
                image: "images/jbanim.jpg"
            },
            {
                name: "Michael Banim",
                category: "general",
                dates: "1796 – 1874",
                bio: "Along with his brother, Michael used literature to document the struggles of rural life, making the case for social and political reform long before the formal rise of the Land League.",
                works: ["The Croppy", "Father Connell"],
                image: "images/mbanim.jpg"
            }
        ]
    },
    "Armagh": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "John Hewitt",
            category: "general",
            dates: "1907 – 1987",
            bio: "A poet who sought a shared, non-sectarian identity in the North. His work focused on the landscape and a sense of 'regionalism' as a way to heal historical divides.",
            works: ["The Colony", "Once Alien Here"],
            image: "images/hewit.jpg"
        }]
    },
    "Carlow": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "James Fintan Lalor",
            category: "general",
            dates: "1807 – 1849",
            bio: "A radical thinker who argued that the ownership of the land was the only true basis for national independence. His ideas inspired both the Land League and the socialist wing of the Republican movement.",
            works: ["The Faith of a Felon"],
            image: "images/lalor.jpg"
        }]
    },
    "Wicklow": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Robert Erskine Childers",
            category: "general",
            dates: "1870 – 1922",
            bio: "A nationalist who smuggled the rifles for the 1916 Rising on his yacht. His commitment to the cause, despite his English background, was absolute, leading to his tragic execution during the Civil War.",
            works: ["The Riddle of the Sands"],
            image: "images/childers.jpg"
        }]
    },
    "Kildare": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Teresa Brayton",
            category: "woman",
            dates: "1868 – 1943",
            bio: "A poet and activist for the Irish diaspora. Her work maintained the emotional link between the millions who left Ireland and the struggle for freedom at home.",
            works: ["The Old Bog Road"],
            image: "images/brayton.jpg"
        }]
    },
    "Down": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Seamus Heaney",
            category: "general",
            dates: "1939 – 2013",
            bio: "Nobel Laureate who explored the 'bog' of Irish history. His poetry dug deep into the soil to find the common roots of Irish identity, navigating the violence of the Troubles with profound grace.",
            works: ["Death of a Naturalist", "North"],
            image: "images/seamus.jpg"
        }]
    },
    "Antrim": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Louis MacNeice",
            category: "general",
            dates: "1907 – 1963",
            bio: "An influential poet who provided a critical, modern perspective on Irish identity. His work represented the complex, often skeptical voice of those caught between different cultures and traditions.",
            works: ["Autumn Journal", "The Sunlight on the Garden"],
            image: "images/macneice.jpg"
        }]
    },
    "Offaly": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Alice Furlong",
            category: "woman",
            dates: "1866 – 1946",
            bio: "A founding member of Inghinidhe na hÉireann and a leading poet. Her work linked the natural beauty of the Irish landscape directly to the political duty of achieving national independence.",
            works: ["Rays of Emerald Isle"],
            image: "images/furlong.jpg"
        }]
    },
    "Meath": {
        count: 1,
        womenCount: 0,
        figures: [{
            name: "Geoffrey Keating",
            category: "general",
            dates: "1569 – 1644",
            bio: "A priest and historian whose Gaelic history of Ireland preserved the nation's past during a period of suppression. He gave future generations a sense of history that predated and resisted English rule.",
            works: ["Foras Feasa ar Éirinn (History of Ireland)"],
            image: "images/keating.jpg"
        }]
    },
    "Laoighis": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Lucy Franks",
            category: "woman",
            dates: "1878 – 1964",
            bio: "She was a president of the Irish Countrywomen's Association. She is credited with aiding in saving the United Irishwomen in the 1920s and giving it a pragmatic direction (later the ICA). She understood that true independence required the empowerment of rural women to lead their own communities and improve social conditions.",
            works: ["ICA Revitalization Records"],
            image: "images/franks.jpg" 
        }]
    },
    "Clare": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Dr. Kathleen Lynn",
            category: "woman",
            dates: "1874 – 1955",
            bio: "A rebel officer and physician who believed that the health of the nation's children was as important as its political freedom. She served in 1916 and co-founded St. Ultan's Hospital.",
            works: ["St. Ultan's Archive"],
            image: "images/drlynn.jpg"
        }]
    },
    "Louth": {
        count: 1,
        womenCount: 1,
        figures: [{
            name: "Hanna Sheehy-Skeffington",
            category: "woman",
            dates: "1877 – 1946",
            bio: "A radical suffragette and nationalist who insisted that women's rights be central to the new Republic. She was a founding member of the Irish Women’s Franchise League and a tireless advocate for gender equality in the struggle.",
            works: ["British Militarism as I Have Known It"],
            image: "images/hanna.jpg" 
        }]
    },
	"Northern Ireland": {
        count: 0,
        womenCount: 0,
        figures: []
    }
};
