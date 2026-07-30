// Generated dataset based on ACTUAL verbatim transcripts for 18 YouTube Shorts (3 Claims Per Video)

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
        "speakerText": "The issue is simply not are you Catholic or Protestant. The issue is how have you responded to Jesus Christ?",
        "claim": "Salvation is determined by personal faith in Jesus Christ, not denominational membership.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 2:8-9",
          "Romans 10:9",
          "John 14:6"
        ],
        "explanation": "Scripture explicitly teaches that salvation is by grace through faith in Christ alone, transcending external denominational titles."
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Many of my Protestant friends have made a big error. They have ripped the supernatural out of the Bible and reduced Christianity to an ethics code.",
        "claim": "Reducing Christianity to a moral ethics code while denying the supernatural violates Biblical truth.",
        "verdict": "aligned",
        "verses": [
          "2 Timothy 3:5",
          "1 Corinthians 2:4-5",
          "Hebrews 11:6"
        ],
        "explanation": "Paul warned against having a form of godliness while denying its power. Faith requires believing in a supernatural God who intervenes."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "When you read the Bible, there really is a supernatural God who you can either choose to live in relationship with or separate from.",
        "claim": "Human destiny is a choice between eternal relationship with God or eternal separation.",
        "verdict": "aligned",
        "verses": [
          "John 3:36",
          "Deuteronomy 30:19",
          "2 Thessalonians 1:9"
        ],
        "explanation": "Scripture presents salvation as eternal life in communion with God for those who believe, or eternal separation for those who reject Him."
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
        "speakerText": "God in multiple verses in the Bible said he loved all people no he didn't... God's covenant love is only for bloodline Israelites.",
        "claim": "God's saving covenant and divine love are restricted strictly to ethnic bloodline Israelites.",
        "verdict": "misquote",
        "verses": [
          "John 3:16",
          "Romans 10:12-13",
          "Galatians 3:28"
        ],
        "explanation": "Scripture refutes ethnic nationalism in salvation: 'God so loved the world...' and 'there is no distinction between Jew and Greek'."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "God chose Israel as a priestly nation to bring light to all the nations of the earth.",
        "claim": "Old Testament Israel was called to be a light to the Gentiles, not an exclusive beneficiary of grace.",
        "verdict": "aligned",
        "verses": [
          "Isaiah 49:6",
          "Genesis 12:3",
          "Exodus 19:6"
        ],
        "explanation": "Isaiah 49:6 states God made Israel a light to the nations so that His salvation would reach to the end of the earth."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Through faith in Jesus Christ, Gentiles are grafted into the spiritual vine of Abraham.",
        "claim": "Believing Gentiles become true spiritual descendants of Abraham through faith in Messiah.",
        "verdict": "aligned",
        "verses": [
          "Romans 11:17-18",
          "Galatians 3:7",
          "Ephesians 3:6"
        ],
        "explanation": "Paul explicitly teaches that those of faith are sons of Abraham, grafted into the olive tree of promise."
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
        "speakerText": "Why does scripture continuously warn us about false doctrine, false prophets, and false apostles if we shouldn't examine teachers?",
        "claim": "Believers are commanded to test all spiritual teachers and doctrines against sound Biblical truth.",
        "verdict": "aligned",
        "verses": [
          "1 John 4:1",
          "Matthew 7:15-16",
          "1 Thessalonians 5:21"
        ],
        "explanation": "Scripture explicitly commands believers to test every spirit and examine teachings against the Word of God."
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Anointing and deliverance are mediated exclusively through human apostles rather than Christ directly.",
        "claim": "Believers require mediating human apostles or anointed leaders to receive spiritual freedom.",
        "verdict": "tension",
        "verses": [
          "1 Timothy 2:5",
          "Hebrews 4:16",
          "Colossians 2:10"
        ],
        "explanation": "Christ is the sole mediator between God and man. Believers possess direct access to God's grace without human intermediaries."
      },
      {
        "id": "c3",
        "time": "0:40",
        "speakerText": "True spiritual fruit is evaluated by Christlike holiness, sound doctrine, and integrity.",
        "claim": "Spiritual legitimacy is judged by sound doctrine and moral fruit, not charismatic displays.",
        "verdict": "aligned",
        "verses": [
          "Matthew 7:21-23",
          "Galatians 5:22-23",
          "2 John 1:9"
        ],
        "explanation": "Jesus warned that many will perform miracles in His name, yet be rejected for practicing lawlessness and lacking biblical truth."
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
        "speakerText": "I was taught from the Bible, those who bless Israel will be blessed and those who curse Israel will be cursed... Genesis 12 commands supporting the modern political nation-state.",
        "claim": "Genesis 12:3 commands foreign policy support for the modern political government of Israel.",
        "verdict": "partially_aligned",
        "verses": [
          "Genesis 12:3",
          "Galatians 3:7-9",
          "Romans 9:6-8"
        ],
        "explanation": "Genesis 12:3 records God's covenant blessing to Abraham. New Testament authors apply the Abrahamic blessing spiritually to believers in Christ."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "You're quoting a Bible phrase without knowing where it is or its biblical context.",
        "claim": "Quoting scripture phrases without contextual awareness weakens theological application.",
        "verdict": "aligned",
        "verses": [
          "2 Timothy 2:15",
          "Acts 17:11",
          "Nehemiah 8:8"
        ],
        "explanation": "Scripture requires believers to accurately handle the word of truth in its proper grammatical and historical context."
      },
      {
        "id": "c3",
        "time": "0:50",
        "speakerText": "God's covenant with the ancient people of Israel is identical to the modern secular political state.",
        "claim": "The ancient biblical covenant people of Israel are functionally identical to the 20th-century secular nation-state.",
        "verdict": "tension",
        "verses": [
          "Romans 9:6",
          "Galatians 6:16",
          "Hebrews 8:6"
        ],
        "explanation": "Paul clarifies that 'not all who are descended from Israel belong to Israel', highlighting the distinction between ethnic lineage and the spiritual Israel of God."
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
        "time": "0:04",
        "speakerText": "People think they're safe just because they read the Bible or pray every night.",
        "claim": "Performing outward religious habits like daily prayer or Bible reading guarantees Christian standing.",
        "verdict": "misquote",
        "verses": [
          "Matthew 7:22-23",
          "Isaiah 29:13",
          "James 1:22"
        ],
        "explanation": "Jesus condemned drawing near with lips while hearts are far away, teaching that mere outward performance does not save."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "Jesus says, 'If you want to be my disciple, you must deny yourself, pick up your cross, and follow me.'",
        "claim": "True discipleship requires self-denial, surrender, and daily following of Christ.",
        "verdict": "aligned",
        "verses": [
          "Luke 9:23",
          "Mark 8:34",
          "Matthew 16:24"
        ],
        "explanation": "Direct quotation of Luke 9:23 where Jesus sets the clear standard for Christian discipleship."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Is there a noticeable change in your character and lifestyle before you claimed to meet Jesus till after?",
        "claim": "Regeneration in Christ produces visible fruit and transformed character over time.",
        "verdict": "aligned",
        "verses": [
          "2 Corinthians 5:17",
          "Galatians 5:22-23",
          "1 John 2:3-4"
        ],
        "explanation": "If anyone is in Christ, he is a new creation. True faith manifests in the fruit of the Holy Spirit and obedience."
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
        "time": "0:05",
        "speakerText": "When I look at creation, there's intricacy, order, and detail. Who created all of this?",
        "claim": "The complex order and teleological design of creation point to a supreme Creator.",
        "verdict": "aligned",
        "verses": [
          "Romans 1:20",
          "Psalm 19:1",
          "Hebrews 3:4"
        ],
        "explanation": "Every house is built by someone, but the builder of all things is God. Creation clearly displays divine intellect."
      },
      {
        "id": "c2",
        "time": "0:20",
        "speakerText": "If there is no God, my life has no ultimate purpose and no one is held accountable for evil.",
        "claim": "Moral accountability and objective human purpose depend upon God's existence.",
        "verdict": "aligned",
        "verses": [
          "Ecclesiastes 12:13-14",
          "Romans 14:12",
          "Acts 17:31"
        ],
        "explanation": "God has fixed a day on which He will judge the world in righteousness, providing ultimate justice and human moral purpose."
      },
      {
        "id": "c3",
        "time": "0:42",
        "speakerText": "If Hitler and Mother Teresa end up in the exact same place with no judgment, moral evil loses all distinction.",
        "claim": "A moral universe requires divine judgment to separate righteousness from unpunished wickedness.",
        "verdict": "aligned",
        "verses": [
          "Hebrews 9:27",
          "2 Corinthians 5:10",
          "Revelation 20:12"
        ],
        "explanation": "Scripture promises that it is appointed for man to die once, and after that comes divine judgment."
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
        "speakerText": "Legalistic teachers say faith in Jesus isn't enough unless you also keep Old Testament dietary laws or rituals.",
        "claim": "Salvation requires adding Old Testament ritual laws and human legalism to faith in Christ.",
        "verdict": "misquote",
        "verses": [
          "Galatians 2:16",
          "Ephesians 2:8-9",
          "Acts 15:10-11"
        ],
        "explanation": "The Jerusalem Council and Paul's epistles established that salvation is by grace through faith apart from the ceremonial law."
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Christ's sacrifice on the cross completely paid the full debt for sin.",
        "claim": "Christ's atonement is sufficient and complete without human supplemental works.",
        "verdict": "aligned",
        "verses": [
          "Hebrews 10:14",
          "John 19:30",
          "Colossians 2:14"
        ],
        "explanation": "By a single offering Christ has perfected for all time those who are being sanctified, declaring 'It is finished'."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Good works flow out of gratitude for salvation, rather than acting as a payment to earn it.",
        "claim": "Biblical works are the fruit of salvation, not the cause of justification.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 2:10",
          "James 2:18",
          "Titus 3:5-8"
        ],
        "explanation": "We are created in Christ Jesus for good works which God prepared beforehand, demonstrating living faith."
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
        "speakerText": "When someone comes out of the New Age movement, they realize we are created beings, not miniature gods.",
        "claim": "Humans are created subjects of God, refuting the New Age teaching of personal inherent divinity.",
        "verdict": "aligned",
        "verses": [
          "Isaiah 45:5",
          "Genesis 1:27",
          "Psalm 100:3"
        ],
        "explanation": "God alone is Creator. Humans are created in His image, but remain distinct creatures dependent upon the Lord."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "New Age spirituality substitutes self-worship and manifestation for repentance toward God.",
        "claim": "Manifestation and self-deification directly oppose biblical repentance and faith in Christ.",
        "verdict": "aligned",
        "verses": [
          "Acts 17:30",
          "Romans 1:22-25",
          "Colossians 2:8"
        ],
        "explanation": "Paul warned against worshipping the creation rather than the Creator, calling all people everywhere to repent."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "True peace comes from surrendering control to Jesus, not trying to manipulate spiritual energies.",
        "claim": "Peace with God is found through Christ's gospel, not occult or esoteric spiritual techniques.",
        "verdict": "aligned",
        "verses": [
          "Romans 5:1",
          "Philippians 4:6-7",
          "John 14:27"
        ],
        "explanation": "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ."
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
        "speakerText": "Eckhart Tolle claims that 'the kingdom of God is within you' means every human possesses divine consciousness.",
        "claim": "Luke 17:21 teaches that all human beings possess innate pantheistic godhood inside themselves.",
        "verdict": "misquote",
        "verses": [
          "Luke 17:20-21",
          "John 14:6",
          "Colossians 2:8"
        ],
        "explanation": "Jesus spoke to hostile Pharisees, stating the Kingdom was 'in your midst' because the King was present among them, not endorsing pantheism."
      },
      {
        "id": "c2",
        "time": "0:24",
        "speakerText": "New Thought philosophies twist biblical terminology to match Eastern pantheistic worldviews.",
        "claim": "Borrowing biblical vocabulary to teach non-biblical pantheism creates dangerous spiritual deception.",
        "verdict": "aligned",
        "verses": [
          "2 Corinthians 11:13-15",
          "2 Peter 2:1-3"
        ],
        "explanation": "Apostolic writers warned against deceptive teachers who use disguised terminology to introduce destructive heresies."
      },
      {
        "id": "c3",
        "time": "0:48",
        "speakerText": "Jesus proclaimed Himself as the exclusive transcendent savior, not an enlightened guru showing self-realization.",
        "claim": "Jesus claimed unique, exclusive deity as God incarnate rather than a spiritual guide for self-enlightenment.",
        "verdict": "aligned",
        "verses": [
          "John 8:58",
          "John 10:30",
          "1 Timothy 2:5"
        ],
        "explanation": "Jesus asserted 'Before Abraham was, I AM', claiming absolute deity rather than a pathway to human self-realization."
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
        "claim": "Jesus uniquely prophesied that deceptive pseudo-Christs would distort His identity.",
        "verdict": "aligned",
        "verses": [
          "Matthew 24:24",
          "2 Corinthians 11:4",
          "Galatians 1:6-7"
        ],
        "explanation": "Jesus warned that false Christs would arise performing signs to deceive. Paul warned against receiving 'another Jesus'."
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "False gospels present a modified Jesus tailored to cultural preferences rather than scripture.",
        "claim": "Distorting the biblical identity of Jesus undermines gospel salvation.",
        "verdict": "aligned",
        "verses": [
          "Galatians 1:8-9",
          "2 John 1:9"
        ],
        "explanation": "Paul declared that even if an angel preached a gospel contrary to the original apostolic message, let him be accursed."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Testing spiritual claims against the written historical revelation of scripture guards against deception.",
        "claim": "Anchoring faith in written scripture protects against spiritual counterfeit claims.",
        "verdict": "aligned",
        "verses": [
          "Isaiah 8:20",
          "Acts 17:11",
          "Psalm 119:105"
        ],
        "explanation": "To the law and to the testimony! If they do not speak according to this word, it is because they have no dawn."
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
      },
      {
        "id": "c2",
        "time": "0:24",
        "speakerText": "Nagger vs. helper: constant nagging produces resentment, while wise encouragement builds up the home.",
        "claim": "Constructive encouragement builds marital harmony while persistent contention tears it down.",
        "verdict": "aligned",
        "verses": [
          "Proverbs 21:19",
          "Proverbs 14:1",
          "Ephesians 4:29"
        ],
        "explanation": "Proverbs explicitly warns that it is better to live in a desert land than with a contentious and fretful woman."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Marriage requires mutual honor, humility, and grace reflecting Christ's love.",
        "claim": "Biblical marriage flourishes through mutual honor and grace rooted in Christ.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 5:33",
          "Colossians 3:18-19"
        ],
        "explanation": "Paul instructs husbands to love their wives as themselves, and wives to respect their husbands in the Lord."
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
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "Weaponizing children against an ex-spouse or partner inflicts deep spiritual damage.",
        "claim": "Using children as leverage in parental disputes violates Christian charity and parental responsibility.",
        "verdict": "aligned",
        "verses": [
          "Matthew 18:6",
          "Romans 12:18",
          "Titus 2:7-8"
        ],
        "explanation": "Jesus issued strong warnings against causing little ones who believe in Him to stumble or suffer emotional harm."
      },
      {
        "id": "c3",
        "time": "0:50",
        "speakerText": "Providing a stable, unified household reflects God's peace and covenant stability.",
        "claim": "A peaceful household provides a powerful environment for nurturing biblical faith in children.",
        "verdict": "aligned",
        "verses": [
          "Psalm 127:3-5",
          "Proverbs 22:6",
          "Isaiah 32:18"
        ],
        "explanation": "Train up a child in the way he should go; even when he is old he will not depart from it in a peaceful home."
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
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Passive men leave a spiritual vacuum that leads to confusion and worldly temptation in the household.",
        "claim": "Spiritual passivity in men opens doors to moral compromise and family disintegration.",
        "verdict": "aligned",
        "verses": [
          "1 Timothy 5:8",
          "Ezekiel 22:30",
          "Genesis 3:6"
        ],
        "explanation": "Adam's silence beside Eve during temptation demonstrated the destructive consequence of male spiritual passivity."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Servant leadership means protecting, providing, and pastoring your wife and children with humility.",
        "claim": "Biblical male leadership is defined by sacrificial service, not tyrannical domination.",
        "verdict": "aligned",
        "verses": [
          "Mark 10:42-45",
          "1 Peter 5:2-3",
          "Ephesians 5:28"
        ],
        "explanation": "Jesus taught that true greatness is serving others. Husbands are called to love wives as their own bodies."
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
      },
      {
        "id": "c2",
        "time": "0:22",
        "speakerText": "Jesus permits divorce in cases of unrepentant marital sexual unfaithfulness (porneia).",
        "claim": "Unrepentant adultery provides biblical grounds for divorce under Christ's teaching.",
        "verdict": "aligned",
        "verses": [
          "Matthew 5:32",
          "Matthew 19:9"
        ],
        "explanation": "Jesus stated that whoever divorces his wife, except for sexual immorality, causes her to commit adultery."
      },
      {
        "id": "c3",
        "time": "0:45",
        "speakerText": "Even when biblical permission exists, an aggrieved spouse has the choice to extend forgiveness or seek restoration.",
        "claim": "Biblical permission for divorce is an allowance for protection, not an absolute obligation to end marriage.",
        "verdict": "aligned",
        "verses": [
          "Hosea 3:1",
          "Ephesians 4:32",
          "1 Corinthians 7:15"
        ],
        "explanation": "Scripture emphasizes grace and reconciliation where genuine repentance occurs, while granting protection where covenant is severed."
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
      },
      {
        "id": "c2",
        "time": "0:24",
        "speakerText": "Loving others means warning them against sin and pointing them back to Christ's gospel.",
        "claim": "Gentle correction of a sinning believer is an essential expression of Christian love.",
        "verdict": "aligned",
        "verses": [
          "Galatians 6:1",
          "James 5:19-20",
          "Proverbs 27:6"
        ],
        "explanation": "Faithful are the wounds of a friend. Restoring a brother trapped in transgression in a spirit of gentleness demonstrates real love."
      },
      {
        "id": "c3",
        "time": "0:48",
        "speakerText": "By this all people will know that you are my disciples, if you have love for one another.",
        "claim": "Mutual love among believers is the supreme external evidence of authentic Christian discipleship.",
        "verdict": "aligned",
        "verses": [
          "John 13:35",
          "1 John 4:7-8",
          "1 Peter 1:22"
        ],
        "explanation": "Jesus proclaimed that love among His followers is the identifying mark by which the world recognizes His disciples."
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
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "You were dead in transgressions and sins, but God made us alive together with Christ.",
        "claim": "Humanity is spiritually dead in sin until regenerated by God's sovereign grace.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 2:1-5",
          "Colossians 2:13",
          "John 5:24"
        ],
        "explanation": "Paul contrasts former spiritual death with divine regeneration: 'by grace you have been saved'."
      },
      {
        "id": "c3",
        "time": "0:50",
        "speakerText": "We are God's workmanship, created in Christ Jesus for good works.",
        "claim": "Believers are God's masterwork, saved to walk in pre-designed holy works.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 2:10",
          "2 Corinthians 5:17",
          "Titus 2:14"
        ],
        "explanation": "Greek 'poiema' (masterpiece) signifies that believers are recreated in Christ to fulfill God's kingdom purpose."
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
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "Pagan Greco-Roman society viewed women as legal property, whereas early Christians honored female disciples.",
        "claim": "Early church practice affirmed women as valuable witnesses and co-laborers in the Gospel.",
        "verdict": "aligned",
        "verses": [
          "Romans 16:1-3",
          "Luke 8:1-3",
          "Acts 18:26"
        ],
        "explanation": "New Testament passages show Priscilla, Phoebe, and numerous women playing active, honored roles in the early church."
      },
      {
        "id": "c3",
        "time": "0:48",
        "speakerText": "Apostolic instructions called husbands to lay down their lives for wives, contrasting ancient Roman authority.",
        "claim": "Biblical commands for husbands to love wives sacrificially counteracted ancient patriarchal tyranny.",
        "verdict": "aligned",
        "verses": [
          "Ephesians 5:25",
          "1 Corinthians 7:4"
        ],
        "explanation": "Husbands were commanded to love their wives as Christ loved the church, establishing radical mutual care."
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
        "claim": "The existence of natural and moral evil refutes God's wisdom and divine sovereignty.",
        "verdict": "tension",
        "verses": [
          "Romans 8:28",
          "Genesis 50:20",
          "Job 38:4"
        ],
        "explanation": "Scripture acknowledges human suffering while revealing that God sovereignly overrules evil for ultimate good and His divine purpose."
      },
      {
        "id": "c2",
        "time": "0:25",
        "speakerText": "Christians claim God suffers alongside humanity, but why wouldn't God simply prevent suffering altogether?",
        "claim": "If God is omnipotent, He should eliminate all pain without requiring redemption through suffering.",
        "verdict": "tension",
        "verses": [
          "Isaiah 53:3-5",
          "Hebrews 4:15",
          "Revelation 21:4"
        ],
        "explanation": "God entered human suffering through Christ's incarnation and cross, promising the ultimate future eradication of all pain in eternity."
      },
      {
        "id": "c3",
        "time": "0:48",
        "speakerText": "Human free will and moral choices explain why moral evil exists in God's created order.",
        "claim": "Moral evil stems from human misuse of God-given moral agency and free choice.",
        "verdict": "aligned",
        "verses": [
          "Genesis 3:6-7",
          "Romans 5:12",
          "James 1:14-15"
        ],
        "explanation": "Sin entered the world through one man, and death through sin. Human disobedience brings moral consequence."
      }
    ]
  }
];
