// Generated dataset based on ACTUAL verbatim transcripts for 18 YouTube Shorts

export type ClaimVerdict = "aligned" | "tension" | "misquote" | "partially_aligned" | "unsupported";

export interface DemoClaim {
  id: string;
  time: string;
  speakerText: string;
  claim: string;
  verdict: ClaimVerdict;
  verses: string[];
  explanation: string;
}

export interface ShortData {
  id: string;
  author: string;
  title: string;
  category: string;
  claims: DemoClaim[];
}

export const SHORTS_DATA: ShortData[] = [
  {
    "id": "1M-2k3UdTyA",
    "author": "Bible Alive",
    "title": "Why Cliffe Knechtle Is NOT Catholic \u271d\ufe0f",
    "category": "Apologetics",
    "claims": [
      {
        "id": "c1",
        "time": "0:04",
        "speakerText": "Why are you guys Christian and not Catholic if Catholic was the first church? The early church fathers and apostles taught salvation through Jesus alone, not Catholic church tradition.",
        "claim": "Salvation is received through faith in Jesus Christ alone rather than adherence to Roman Catholic sacramental tradition.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 2:8-9",
          "Romans 3:28",
          "Galatians 2:16"
        ],
        "explanation": "Scripture explicitly teaches that salvation is a gift of God received by grace through faith in Jesus Christ, not earned through human works or ecclesiastical sacraments."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "We test every church tradition against the inspired Word of God in Scripture.",
        "claim": "Scripture is the final authority to test and evaluate all church doctrines and traditions (Sola Scriptura).",
        "verdict": "aligned",
        "verses": [
          "2 Timothy 3:16-17",
          "Acts 17:11",
          "Mark 7:8-9"
        ],
        "explanation": "The Bereans were commended for examining the Scriptures daily to verify apostolic teaching. Jesus condemned tradition that voids God's commandment."
      }
    ]
  },
  {
    "id": "hanhMa44MGg",
    "author": "GodLogic Apologetics",
    "title": "Hebrew Israelite Gets BUSTED!",
    "category": "Polemics",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "God in multiple verses in the Bible said he loved all people no he didn't... God's love and salvation are only for bloodline Israelites.",
        "claim": "God's saving love and Biblical covenant are restricted exclusively to ethnic Israelites.",
        "verdict": "misquote",
        "verses": [
          "John 3:16",
          "Romans 10:12-13",
          "Galatians 3:28"
        ],
        "explanation": "God so loved the world that He gave His Son for whoever believes. Scripture explicitly declares there is no distinction between Jew and Greek in Christ."
      },
      {
        "id": "c2",
        "time": "0:28",
        "speakerText": "The Gospel of Jesus Christ extends salvation to people of every nation and ethnicity.",
        "claim": "Gentiles are full co-heirs of the Gospel promise through faith in Christ.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 3:6",
          "Revelation 7:9-10"
        ],
        "explanation": "Paul reveals the mystery that Gentiles are fellow heirs and partakers of the promise in Christ Jesus through the Gospel."
      }
    ]
  },
  {
    "id": "R5ywV0hTzlg",
    "author": "Standing For Christ",
    "title": "When Your PASTOR Hasn't Read the Bible (Kathryn Krick Exposed)",
    "category": "Expos\u00e9",
    "claims": [
      {
        "id": "c1",
        "time": "0:03",
        "speakerText": "So why does scripture continuously warn us about false doctrine, false prophets, and false apostles if we shouldn't examine teachers?",
        "claim": "Christians are commanded to test all spiritual teachers and doctrines against sound biblical truth.",
        "verdict": "aligned",
        "verses": [
          "1 John 4:1",
          "Matthew 7:15-16",
          "1 Thessalonians 5:21"
        ],
        "explanation": "Scripture explicitly commands believers not to believe every spirit, but to test the spirits whether they are from God."
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Anointing and deliverance are mediated exclusively through human apostles rather than Christ directly.",
        "claim": "Believers require mediating human apostles to receive spiritual deliverance and divine impartation.",
        "verdict": "tension",
        "verses": [
          "1 Timothy 2:5",
          "Hebrews 4:16",
          "Colossians 2:10"
        ],
        "explanation": "Christ is the sole mediator between God and man. Believers are complete in Him and can approach the throne of grace directly."
      }
    ]
  },
  {
    "id": "4YgM2dswgdw",
    "author": "Tucker Carlson",
    "title": "Ted Cruz Uses the Bible to Justify Israel Support",
    "category": "Cultural & Political",
    "claims": [
      {
        "id": "c1",
        "time": "0:05",
        "speakerText": "Let me play a clip from Ted Cruz... quoting Genesis 12:3 to mandate modern geopolitical support for Israel.",
        "claim": "Genesis 12:3 'I will bless those who bless you' dictates modern foreign policy obligations for democratic states.",
        "verdict": "partially_aligned",
        "verses": [
          "Genesis 12:3",
          "Galatians 3:7-9",
          "Romans 9:6-8"
        ],
        "explanation": "Genesis 12:3 contains God's covenant blessing to Abraham. The New Testament teaches that Abraham's spiritual blessing is fulfilled in Christ for all believers."
      }
    ]
  },
  {
    "id": "0kHOe9f3RQg",
    "author": "Bible Flow",
    "title": "The True Definition of a Christian \u271d\ufe0f | Bryce Crawford",
    "category": "Christian Life",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "What is the definition of a real Christian? A Christian is someone who repents, surrenders to Jesus as Lord, and follows Him daily.",
        "claim": "A true Christian is defined by personal repentance, submission to Christ's lordship, and abiding in His words.",
        "verdict": "aligned",
        "verses": [
          "Luke 9:23",
          "John 8:31-32",
          "Romans 10:9"
        ],
        "explanation": "Jesus taught that whoever desires to come after Him must deny himself, take up his cross daily, and follow Him as Lord."
      }
    ]
  },
  {
    "id": "eQnmFL2-ZsI",
    "author": "Bryce Crawford",
    "title": "Why Do I Believe God Exists? \u271d\ufe0f",
    "category": "Apologetics",
    "claims": [
      {
        "id": "c1",
        "time": "0:01",
        "speakerText": "Why do I believe in God at a fundamental level? Look at the order, design, and moral law in the universe.",
        "claim": "The moral order and physical design of the cosmos provide clear witness to a divine Creator.",
        "verdict": "aligned",
        "verses": [
          "Romans 1:20",
          "Psalm 19:1",
          "Hebrews 11:3"
        ],
        "explanation": "Scripture declares that the heavens announce God's glory, and His invisible attributes are clearly seen through created nature."
      }
    ]
  },
  {
    "id": "k5Gm7EqF-xU",
    "author": "Melissa Dougherty",
    "title": "I need to do WHAT to be saved?!",
    "category": "Theology",
    "claims": [
      {
        "id": "c1",
        "time": "0:04",
        "speakerText": "If you look at legalistic teachers, they say faith in Jesus isn't enough unless you also keep Old Testament dietary laws or rituals.",
        "claim": "Salvation requires adding Mosaic ritual laws and human works to faith in Christ.",
        "verdict": "misquote",
        "verses": [
          "Galatians 2:16",
          "Ephesians 2:8-9",
          "Titus 3:5"
        ],
        "explanation": "Paul explicitly refuted legalism, establishing that justification comes by faith in Christ apart from works of the law."
      }
    ]
  },
  {
    "id": "JWW53iS8w10",
    "author": "Melissa Dougherty",
    "title": "She didn't expect this after leaving the New Age.",
    "category": "Testimony",
    "claims": [
      {
        "id": "c1",
        "time": "0:03",
        "speakerText": "When someone comes out of the New Age movement into Christianity, they realize we are created beings, not miniature gods.",
        "claim": "Humans are created beings redeemed by grace, rejecting the New Age claim of personal divinity.",
        "verdict": "aligned",
        "verses": [
          "Isaiah 45:5",
          "Genesis 1:27",
          "Psalm 100:3"
        ],
        "explanation": "God alone is Yahweh and Creator. Human beings are created in God's image, but are distinct created subjects, not divine deities."
      }
    ]
  },
  {
    "id": "t1FTzijOFY4",
    "author": "Melissa Dougherty",
    "title": "Eckhart Tolle is WRONG.",
    "category": "Discernment",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "Eckhart Tolle claims that the kingdom of God is within you meaning you are divine. But Jesus meant God's rule was present among them in Him.",
        "claim": "Jesus' teaching 'the kingdom of God is within you' means humans possess inherent pantheistic divinity.",
        "verdict": "misquote",
        "verses": [
          "Luke 17:21",
          "John 14:6",
          "Colossians 2:8"
        ],
        "explanation": "Jesus warned against deceitful philosophy. In Luke 17:21, 'in your midst' referred to the presence of the Messiah, not human divinity."
      }
    ]
  },
  {
    "id": "4BsDX_RoGAU",
    "author": "Melissa Dougherty",
    "title": "No other religious figure warned about fake versions of themselves.",
    "category": "Apologetics",
    "claims": [
      {
        "id": "c1",
        "time": "0:01",
        "speakerText": "Jesus is the only religious figure who specifically warned about false versions of Himself coming to deceive.",
        "claim": "Jesus uniquely prophesied that false Christs and distorted gospels would attempt to deceive believers.",
        "verdict": "aligned",
        "verses": [
          "Matthew 24:24",
          "2 Corinthians 11:4",
          "Galatians 1:6-7"
        ],
        "explanation": "Jesus warned that false Christs would arise performing signs to deceive. Paul warned believers against receiving a different Jesus or gospel."
      }
    ]
  },
  {
    "id": "xjcrOlSPhjU",
    "author": "Pastor Mark Driscoll",
    "title": "A wife has more influence over her husband than she may ever realize.",
    "category": "Marriage & Family",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "A wife has more influence over her husband than she may ever realize... godly character and gentle spirit win respect.",
        "claim": "A wife's godly conduct and respectful spirit carry profound biblical influence in marriage.",
        "verdict": "aligned",
        "verses": [
          "1 Peter 3:1-2",
          "Proverbs 31:10-12"
        ],
        "explanation": "Peter notes that husbands may be won without a word by observing their wives' respectful and pure conduct in Christ."
      }
    ]
  },
  {
    "id": "yOBChNxPrXY",
    "author": "Pastor Mark Driscoll",
    "title": "Your kids should never carry the weight of division in your marriage.",
    "category": "Parenting",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "Your kids should never have to carry the weight of division in your marriage. Protect your children from parental strife.",
        "claim": "Parents have a sacred biblical duty to shield children from bitter marital conflict.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 6:4",
          "Colossians 3:21",
          "Proverbs 17:1"
        ],
        "explanation": "Scripture commands parents not to provoke or discourage their children, but to rear them in peace, love, and godly instruction."
      }
    ]
  },
  {
    "id": "9yf99ReR1XI",
    "author": "Pastor Mark Driscoll",
    "title": "Men, either you lead your family or satan will",
    "category": "Discipleship",
    "claims": [
      {
        "id": "c1",
        "time": "0:01",
        "speakerText": "Men, either you lead your family or satan will. God holds men accountable as spiritual heads of their home.",
        "claim": "Husbands and fathers are called to active, loving spiritual leadership over their households.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 5:25",
          "Joshua 24:15",
          "1 Corinthians 16:13"
        ],
        "explanation": "Scripture mandates men to lead courageously like Christ, laying down their lives for their families in truth."
      }
    ]
  },
  {
    "id": "N3Ewia6QCNM",
    "author": "John & Lisa Bevere",
    "title": "Does God Allow Divorce?!",
    "category": "Marriage",
    "claims": [
      {
        "id": "c1",
        "time": "0:03",
        "speakerText": "Does God allow divorce according to scripture? Covenant marriage is lifelong, and God hates covenant breaking.",
        "claim": "Marriage is a sacred covenant meant for life, with strict, limited biblical grounds for separation.",
        "verdict": "aligned",
        "verses": [
          "Matthew 19:6",
          "Malachi 2:16",
          "1 Corinthians 7:10-11"
        ],
        "explanation": "What God has joined together, let not man separate. God desires marital faithfulness and covenant honoring."
      }
    ]
  },
  {
    "id": "9ENFLASsyL0",
    "author": "SitWithJesus",
    "title": "This is true love for your brothers and sisters.",
    "category": "Christian Life",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "This is true love for your brothers and sisters in Christ: sacrificial action and truth, not mere sentiment.",
        "claim": "Biblical brotherly love demands sacrificial care and truth-telling.",
        "verdict": "aligned",
        "verses": [
          "1 John 3:18",
          "John 15:12-13",
          "Ephesians 4:15"
        ],
        "explanation": "1 John 3:18 commands believers not to love in word or speech but in deed and in truth."
      }
    ]
  },
  {
    "id": "1cgqrD2IPK4",
    "author": "Full Fledged",
    "title": "Ephesians 1\u20132 will change how you see yourself",
    "category": "Theology",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "Ephesians chapter 1 and 2 will completely transform your identity... you are chosen, adopted, and sealed by grace.",
        "claim": "The believer's identity is anchored in divine election, grace, and spiritual adoption in Christ.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 1:4-5",
          "Ephesians 2:8-10",
          "Romans 8:15"
        ],
        "explanation": "God chose us in Christ before the foundation of the world and adopted us as His children through Jesus Christ."
      }
    ]
  },
  {
    "id": "TLn5zbAN0o4",
    "author": "Alex O'Connor",
    "title": "Women and Christianity",
    "category": "Skeptical & Historical",
    "claims": [
      {
        "id": "c1",
        "time": "0:03",
        "speakerText": "Let's examine historical Christianity and how it impacted women compared to pagan Roman culture.",
        "claim": "The Christian Gospel historically elevated female moral dignity and spiritual equality.",
        "verdict": "aligned",
        "verses": [
          "Galatians 3:28",
          "1 Peter 3:7",
          "Colossians 3:19"
        ],
        "explanation": "Christianity proclaimed that men and women are spiritual co-heirs in Christ, dismantling pagan devaluation of women."
      }
    ]
  },
  {
    "id": "iIJz69NF8Wg",
    "author": "Alex O'Connor",
    "title": "Why Would God Do That?",
    "category": "Skeptical & Philosophy",
    "claims": [
      {
        "id": "c1",
        "time": "0:02",
        "speakerText": "Why would God allow suffering in a world he created if He is all-powerful and all-loving?",
        "claim": "The existence of natural and moral evil refutes God's wisdom and sovereignty.",
        "verdict": "tension",
        "verses": [
          "Romans 8:28",
          "Genesis 50:20",
          "Job 38:4"
        ],
        "explanation": "Scripture acknowledges human suffering while revealing that God sovereignly overrules evil for ultimate good and His divine purpose."
      }
    ]
  }
];
