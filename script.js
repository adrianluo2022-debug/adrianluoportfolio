const categories = [
  { id: "all", en: "All", zh: "全部" },
  { id: "interior", en: "Interior", zh: "室内" },
  { id: "architecture", en: "Architecture", zh: "建筑" },
];

const subcategories = {
  architecture: ["house-remodel", "house-addition", "new-adu", "kitchen-bathroom-remodel", "daycare"],
  interior: ["floorplan", "rendering"],
};

const subcategoryLabels = {
  "house-remodel": { en: "House Remodel", zh: "住宅改造" },
  "house-addition": { en: "House Addition", zh: "住宅加建" },
  "new-adu": { en: "New ADU", zh: "新建 ADU" },
  "kitchen-bathroom-remodel": { en: "Kitchen & Bathroom Remodel", zh: "厨房与浴室改造" },
  daycare: { en: "Daycare", zh: "日托空间" },
  floorplan: { en: "Floorplan", zh: "平面设计" },
  rendering: { en: "Rendering", zh: "效果图" },
};

const copy = {
  en: {
    "nav.work": "Work",
    "nav.focus": "Focus",
    "nav.profile": "About Me",
    "nav.contact": "Contact",
    "hero.eyebrow": "Architecture / Interior / Rendering",
    "hero.title": "Adrian Luo",
    "hero.copy":
      "Selected work across house remodels, additions, daycare environments, interior floor plans, and visualization.",
    "hero.viewWork": "View Work",
    "hero.contact": "Contact",
    "hero.motto": "Design never ends.",
    "hero.metaOne": "Residential Remodel",
    "hero.metaTwo": "Interior Planning",
    "hero.metaThree": "Rendering",
    "hero.metaFour": "Furniture Sourcing & Ocean Freight",
    "hero.scroll": "Scroll",
    "profile.eyebrow": "About Me",
    "profile.title": "Profile / Experience",
    "profile.lede":
      "With more than four years of design experience, I work across interior planning, concept development, and architectural visualization for private homes, apartments, and real estate marketing. I begin each project by studying the space, how it will be used, and the conditions already in place. From there, I refine proportion, material, and atmosphere while continuing to learn from the disciplines around the work.",
    "profile.copyOne":
      "This portfolio is structured for architecture and interior design applications, with project entries ready for drawings, renderings, diagrams, and process notes.",
    "profile.copyTwo":
      "The first version uses placeholder images and editable sample content so real project material can be added quickly when it is available.",
    "experience.eyebrow": "About Me",
    "experience.title": "Work history by year",
    "experience.periodOne": "2024 - 2026",
    "experience.roleOne": "Guangzhou Huihe Consulting Management Co., Ltd. / Acre NYC — Interior Designer",
    "experience.copyOne":
      "Created sales renderings for high-end residential developments before construction, using 3ds Max and SketchUp to turn design proposals into clear, convincing visuals. Refined floor plans for marketing, assisted with furniture and finish selections, and coordinated directly with manufacturers in China. In 2025, I helped manage fabric approvals, production, packing, and ocean freight for eight containers shipped from Shenzhen to New York; all arrived on schedule, within budget, and without loss.",
    "experience.periodTwo": "2022 - 2024",
    "experience.roleTwo": "Shenzhen Jingchen Technology Co., Ltd., Hunan Branch — Architectural Designer",
    "experience.copyTwo":
      "Produced architectural drawings for whole-house, kitchen and bathroom remodels, additions, ADUs, multi-unit housing, commercial spaces, and daycare centers. Prepared clear, accurate, and coordinated drawing sets for each building type.",
    "focus.eyebrow": "Portfolio Focus",
    "focus.title": "Work organized by type.",
    "focus.copy":
      "Choose Architecture or Interior to browse the work by category.",
    "focus.archTitle": "Architecture",
    "focus.intTitle": "Interior",
    "procurement.eyebrow": "Sourcing",
    "procurement.copy": "A concise service note for selection, purchasing, shipping, and installation tracking.",
    "procurement.shippingTitle": "Ocean freight",
    "procurement.routeFrom": "Shenzhen",
    "procurement.routeTo": "New York",
    "procurement.dateOne": "Date",
    "procurement.dateTwo": "Date",
    "procurement.dateThree": "Date",
    "procurement.itemOneTitle": "Selection",
    "procurement.itemOneCopy": "Furniture, lighting, and finish options organized by project style, budget, and lead time.",
    "procurement.itemTwoTitle": "Purchasing",
    "procurement.itemTwoCopy": "Order lists, supplier notes, dimensions, quantities, and replacement options prepared for review.",
    "procurement.itemThreeTitle": "Shipping",
    "procurement.itemThreeCopy": "Ocean freight milestones, delivery windows, and receiving notes tracked alongside the design schedule.",
    "work.eyebrow": "Selected Work",
    "work.title": "Selected Work",
    "skills.eyebrow": "Design Scope",
    "skills.blockOneTitle": "Design Scope",
    "skills.blockThreeTitle": "Visualization Tools",
    "contact.eyebrow": "Contact",
    "contact.title": "Contact",
    "contact.copy": "I am always happy to hear from you and talk about design, projects, or possible collaborations.",
    "contact.copyrightPrefix": "© 2026",
    "contact.copyrightSuffix": "All rights reserved.",
    "filter.allTypes": "All Types",
    "count.single": "project shown",
    "count.multiple": "projects shown",
    "modal.type": "Type",
    "modal.tools": "Software",
    "modal.close": "Close project detail",
    "language.aria": "Switch language to Chinese",
    "site.title": "Adrian Luo | Design Portfolio",
  },
  zh: {
    "nav.focus": "分类",
    "hero.scroll": "滚动",
    "experience.eyebrow": "关于我",
    "experience.title": "按年份整理的工作经历",
    "experience.periodOne": "2024 - 2026",
    "experience.roleOne": "广州惠和咨询管理有限公司 / Acre NYC — 室内设计师",
    "experience.copyOne":
      "负责高端住宅地产项目建成前的销售效果图，以 3ds Max、SketchUp 将设计方案转化为清晰、可信的视觉表达，并优化户型图用于销售展示。参与软装与家具选品，直接对接国内工厂，跟进面料确认、生产、装箱与运输。2025 年参与协调 8 个货柜从深圳海运至纽约，均在预算内按期交付，无物品遗失。",
    "experience.periodTwo": "2022 - 2024",
    "experience.roleTwo": "深圳市璟辰科技技术有限公司湖南分公司 — 建筑设计师",
    "experience.copyTwo":
      "负责住宅建筑设计与制图，项目包括整屋改造、厨房与卫浴改造、住宅加建、ADU、多单元公寓、商业空间与日托中心，并针对不同建筑类型完成清晰、准确、可协调落地的设计文件。",
    "focus.eyebrow": "作品分类",
    "focus.title": "按类型浏览作品。",
    "focus.copy": "选择“建筑”或“室内”，按类别浏览项目。",
    "focus.archTitle": "建筑",
    "focus.intTitle": "室内",
    "procurement.eyebrow": "采购与运输",
    "procurement.copy": "选品、采购、运输和安装跟踪的简洁说明。",
    "procurement.shippingTitle": "海运",
    "procurement.routeFrom": "深圳",
    "procurement.routeTo": "纽约",
    "procurement.dateOne": "日期",
    "procurement.dateTwo": "日期",
    "procurement.dateThree": "日期",
    "procurement.itemOneTitle": "选品",
    "procurement.itemOneCopy": "根据项目风格、预算和交期整理家具、灯具与饰面选择。",
    "procurement.itemTwoTitle": "采购",
    "procurement.itemTwoCopy": "整理订单清单、供应商备注、尺寸、数量和替代方案，方便确认与复核。",
    "procurement.itemThreeTitle": "海运",
    "procurement.itemThreeCopy": "跟踪海运节点、到货窗口和收货备注，让运输安排和设计进度保持同步。",
    "nav.work": "作品",
    "nav.profile": "关于我",
    "nav.contact": "联系",
    "hero.eyebrow": "建筑 / 室内 / 效果图",
    "hero.title": "Adrian Luo",
    "hero.copy": "作品涵盖住宅改造、住宅加建、日托空间、室内平面设计与效果图表达。",
    "hero.viewWork": "查看作品",
    "hero.contact": "联系我",
    "hero.motto": "设计永无止境",
    "hero.metaOne": "住宅改造",
    "hero.metaTwo": "室内平面",
    "hero.metaThree": "效果图",
    "hero.metaFour": "家具采购和海运",
    "profile.eyebrow": "关于我",
    "profile.title": "简介 / 履历",
    "profile.lede":
      "从事设计行业四年有余，主要负责室内空间规划、概念设计与效果图表现，项目包括私人住宅、公寓及地产销售视觉。面对不同类型的项目，我习惯先研究空间、使用方式与现场条件，再推敲比例、材料和氛围；也持续从相关专业中学习，让方案更准确、更耐看，也更接近实际落地。",
    "profile.copyOne": "这个作品集面向建筑与室内设计申请场景，项目条目可继续补充图纸、效果图、分析图和过程说明。",
    "profile.copyTwo": "首版先使用占位图片与可编辑示例内容，等真实项目材料整理好之后可以快速替换。",
    "work.eyebrow": "精选作品",
    "work.title": "精选作品",
    "skills.eyebrow": "设计范围",
    "skills.blockOneTitle": "设计范围",
    "skills.blockThreeTitle": "作图使用工具",
    "contact.eyebrow": "联系",
    "contact.title": "联系",
    "contact.copy": "欢迎随时联系，也期待与你交流设计、项目与合作想法。",
    "contact.copyrightPrefix": "© 2026",
    "contact.copyrightSuffix": "版权所有。",
    "filter.allTypes": "全部类型",
    "count.single": "个项目",
    "count.multiple": "个项目",
    "modal.type": "类型",
    "modal.tools": "作图软件",
    "modal.close": "关闭项目详情",
    "language.aria": "切换至英文",
    "site.title": "Adrian Luo | 设计作品集",
  },
};

const listCopy = {
  en: {
    designScope: [
      "Residential remodel planning",
      "House addition planning",
      "Kitchen and bathroom remodel",
      "Architectural construction detailing",
      "Real estate marketing renderings and floor plan graphics",
    ],
  },
  zh: {
    designScope: ["住宅改造规划", "住宅加建规划", "厨房与浴室改造", "建筑施工深化", "地产销售效果图与户型平面展示"],
  },
};

const softwareTools = [
  {
    name: "AutoCAD",
    maker: "Autodesk",
    icon: "assets/software-icons/autocad.png",
    fallback: "CAD",
  },
  {
    name: "Revit",
    maker: "Autodesk",
    icon: "assets/software-icons/revit.png",
    fallback: "RVT",
  },
  {
    name: "SketchUp",
    maker: "Trimble",
    icon: "assets/software-icons/sketchup.png",
    fallback: "SU",
  },
  {
    name: "3ds Max",
    maker: "Autodesk",
    icon: "assets/software-icons/3ds-max.png",
    fallback: "3D",
  },
  {
    name: "V-Ray",
    maker: "Chaos",
    icon: "assets/software-icons/vray.png",
    fallback: "VR",
  },
  {
    name: "Corona Renderer",
    maker: "Chaos",
    icon: "assets/software-icons/corona.png",
    fallback: "CR",
  },
  {
    name: "Photoshop",
    maker: "Adobe",
    icon: "assets/software-icons/photoshop.png",
    fallback: "PS",
  },
  {
    name: "ComfyUI",
    maker: "ComfyUI",
    icon: "assets/software-icons/comfyui.png",
    fallback: "CU",
  },
  {
    name: "Lumion",
    maker: "Lumion",
    icon: "assets/software-icons/lumion.png",
    fallback: "LU",
  },
];

const projects = [
  {
    id: "courtyard-remodel",
    category: "architecture",
    subcategory: "house-remodel",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Courtyard House Remodel",
      zh: "庭院住宅改造",
    },
    description: {
      en: "A residential remodel study focused on daylight, family circulation, and a calmer entry sequence.",
      zh: "以采光、家庭动线和更安静的入口体验为重点的住宅改造研究。",
    },
    details: {
      en: "The placeholder case is prepared for before-and-after plans, facade references, and interior view studies. Replace this entry with measured drawings, process notes, and final images when the project package is ready.",
      zh: "该占位案例预留了改造前后平面、立面参考和室内视角研究的位置。真实项目整理好后，可替换为测绘图、过程说明和最终图片。",
    },
    role: {
      en: "Concept planning, layout study, visual presentation",
      zh: "概念规划、平面研究、视觉表达",
    },
    tools: "AutoCAD, SketchUp, Enscape, Photoshop",
    tags: {
      en: ["Daylight", "Circulation", "Existing Conditions"],
      zh: ["采光", "动线", "现状改造"],
    },
  },
  {
    id: "side-yard-addition",
    category: "architecture",
    subcategory: "house-addition",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Side Yard House Addition",
      zh: "侧院住宅加建",
    },
    description: {
      en: "A compact addition concept balancing added program area with the scale of the existing home.",
      zh: "在新增功能面积与原住宅尺度之间取得平衡的小型加建概念。",
    },
    details: {
      en: "This project slot is ready for massing diagrams, plan options, exterior material tests, and notes on how the addition meets the existing roofline and yard edge.",
      zh: "该项目条目可放置体量分析、平面方案、外立面材料测试，以及加建体量如何衔接原屋顶线和院落边界的说明。",
    },
    role: {
      en: "Massing study, plan options, exterior concept",
      zh: "体量研究、平面方案、外观概念",
    },
    tools: "Revit, SketchUp, Photoshop",
    tags: {
      en: ["Addition", "Massing", "Residential Scale"],
      zh: ["加建", "体量", "住宅尺度"],
    },
  },
  {
    id: "kitchen-bath-rework",
    category: "architecture",
    subcategory: "kitchen-bathroom-remodel",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Kitchen & Bath Rework",
      zh: "厨房与浴室改造",
    },
    description: {
      en: "A renovation study for wet-area efficiency, storage, fixture coordination, and warm material continuity.",
      zh: "围绕湿区效率、收纳、洁具协调和温暖材料连续性的改造研究。",
    },
    details: {
      en: "Use this slot for millwork elevations, fixture schedules, tile studies, and perspective renderings that communicate construction intent and atmosphere together.",
      zh: "此条目适合替换为定制柜立面、洁具表、瓷砖研究和透视效果图，同时表达施工意图与空间氛围。",
    },
    role: {
      en: "Plan adjustment, material direction, rendering",
      zh: "平面调整、材料方向、效果表达",
    },
    tools: "AutoCAD, SketchUp, Enscape, Photoshop",
    tags: {
      en: ["Kitchen", "Bathroom", "Millwork"],
      zh: ["厨房", "浴室", "定制柜"],
    },
  },
  {
    id: "daycare-learning-room",
    category: "architecture",
    subcategory: "daycare",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Daycare Learning Room",
      zh: "日托学习空间",
    },
    description: {
      en: "A daycare environment study organized around visibility, flexible activity zones, and soft material cues.",
      zh: "围绕可视性、灵活活动分区和柔和材料提示展开的日托空间研究。",
    },
    details: {
      en: "The daycare category can hold code-aware planning diagrams, classroom layouts, finish palettes, and renderings that explain safety and daily use.",
      zh: "日托类别可用于放置规范意识下的平面分析、教室布局、材料色板和效果图，用来说明安全性与日常使用方式。",
    },
    role: {
      en: "Program zoning, plan organization, material mood",
      zh: "功能分区、平面组织、材料氛围",
    },
    tools: "AutoCAD, Revit, Photoshop",
    tags: {
      en: ["Learning", "Visibility", "Flexible Zones"],
      zh: ["学习空间", "可视性", "灵活分区"],
    },
  },
  {
    id: "compact-floorplan",
    category: "interior",
    subcategory: "floorplan",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Compact Interior Floorplan",
      zh: "紧凑型室内平面",
    },
    description: {
      en: "A floorplan-focused interior study clarifying furniture scale, circulation, storage, and room hierarchy.",
      zh: "以平面为核心的室内研究，梳理家具尺度、动线、收纳和空间层级。",
    },
    details: {
      en: "This entry is designed for plan drawings, furniture layouts, room-by-room notes, and simple diagrams that make the design logic easy to review.",
      zh: "该条目用于放置平面图、家具布置、分房间说明和简洁分析图，让设计逻辑更容易被审阅。",
    },
    role: {
      en: "Furniture planning, circulation review, drawing cleanup",
      zh: "家具布置、动线复核、图纸整理",
    },
    tools: "AutoCAD, Revit, Photoshop",
    tags: {
      en: ["Floorplan", "Furniture", "Storage"],
      zh: ["平面图", "家具", "收纳"],
    },
  },
  {
    id: "warm-rendering-set",
    category: "interior",
    subcategory: "rendering",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    title: {
      en: "Warm Interior Rendering Set",
      zh: "温暖室内效果图组",
    },
    description: {
      en: "A rendering set exploring natural light, tactile surfaces, and quiet residential atmosphere.",
      zh: "探索自然光、触感材料和安静住宅氛围的室内效果图组。",
    },
    details: {
      en: "Replace this placeholder with final renderings, material studies, camera notes, and any comparison views that show how the image direction developed.",
      zh: "后续可替换为最终效果图、材料研究、镜头说明，以及展示效果图方向演进的对比视图。",
    },
    role: {
      en: "Model refinement, lighting, material tuning, post-production",
      zh: "模型深化、灯光、材质调整、后期处理",
    },
    tools: "SketchUp, Enscape, V-Ray, Photoshop",
    tags: {
      en: ["Rendering", "Material", "Atmosphere"],
      zh: ["效果图", "材料", "氛围"],
    },
  },
];

const interiorAssets = {
  cresyn: [
    "01-livingroom-option-0410-1.png",
    "03-2b-livingroom-0507.png",
    "04-lobby-0423-1.png",
    "05-2b-livingroom-0422.png",
    "06-terrace-0507-2.png",
    "08-living-room-0527-2.png",
    "09-bedroom-0527-1.png",
    "10-livingroom-option-0527-1.png",
    "12-bath-0528-2.png",
    "13-bath-option-0528-1.png",
  ],
  "the-pople": [
    "13-lobby002-0710.png",
    "12-lobby001-0710.png",
    "14-lobby003-0710.png",
    "15-roof-terrace-0706-1.png",
    "16-roof-terrace-0706-2.png",
    "17-roof-terrace-0706-3.png",
    "18-roof-terrace-0706-4.png",
    "19-bath-shower-0612-1.png",
    "20-bath-shower-0612-2.png",
    "21-bath-tub-0615.png",
  ],
  "mv-54k": ["01-living-3.jpg", "02-living-1.jpg", "03-living-2.jpg", "04-bedroom-1.jpg"],
  "mps-two": [
    "01-living-room-3.jpg",
    "02-living-room-2.jpg",
    "03-living-room-1.jpg",
    "04-2b-kitchen-a002.jpg",
    "05-primary-bath-3.jpg",
    "06-kitchen-01.jpg",
    "07-primary-bath-2.jpg",
  ],
  "410-west": [
    "01-living-2.png",
    "02-living-3.png",
    "03-bedroom-2.png",
    "04-bedroom-1.png",
    "05-living-1.png",
    "06-living-7.png",
    "07-living-4.png",
    "08-kitchen-1.png",
    "09-living-02.png",
    "10-living-01.png",
    "11-kitchen-2.png",
    "12-master-bedroom.png",
    "13-bath.png",
    "14-master-bath-2.png",
    "15-master-bath-1.png",
  ],
  tfa: [
    "01-gym.jpg",
    "02-living-rm-03.jpg",
    "03-bedroom-1.jpg",
    "04-living-2.jpg",
    "05-living-1.jpg",
    "06-living-rm-1.jpg",
    "07-master-bedroom-2.jpg",
    "08-dining.jpg",
    "09-terrace-2.jpg",
    "10-bedroom-2.jpg",
    "11-terrace.jpg",
    "12-living-rm.jpg",
    "13-master-bedroom.jpg",
    "14-terrace-3.png",
    "15-dining-kitchen.jpg",
    "16-staging-guest-bed-existing.jpg",
    "17-staging-guest-bed-proposed.jpg",
    "18-staging-primary-bed-existing.jpg",
    "19-staging-primary-bed-proposed.jpg",
    "20-staging-living-existing.jpg",
    "21-staging-living-proposed.jpg",
  ],
  athena: [
    "01-terrace-1.jpg",
    "02-exterior-1.jpg",
    "03-view-2.jpg",
    "04-view-1.jpg",
    "05-lobby-camera-002.jpg",
    "06-lobby-camera-001.jpg",
    "07-view-3.jpg",
    "08-9b-living.jpg",
    "09-living-rm-1.jpg",
    "10-living-rm-2.jpg",
    "11-5a-bedroom-1.jpg",
    "12-living-rm-01-alt.jpg",
    "13-3g-render.jpg",
    "14-c-006.jpg",
    "15-c-005.jpg",
    "16-c-011.jpg",
    "17-c-010.jpg",
    "18-c-008.jpg",
    "19-c-007.jpg",
    "20-c-009.jpg",
    "21-c-001.jpg",
    "22-c-004.jpg",
    "23-c-003.jpg",
    "24-c-002.jpg",
    "25-living-rm-02.jpg",
    "26-living-rm-04.jpg",
    "27-bedroom-01.jpg",
    "28-bedroom-02.jpg",
    "29-living-rm-01.jpg",
    "30-dining-rm.jpg",
    "31-living-rm-03.jpg",
  ],
  "the-prince": [
    "01-view-0312-2.png",
    "02-view-0312-1.png",
    "03-6j-kitchen-0309.png",
    "04-6j-kitchen-0304.png",
    "05-6j-kitchen-0306-3.png",
  ],
  "the-parisian": [
    "01-rooftop-003.png",
    "02-terrace-03.png",
    "03-rooftop-004.png",
    "04-terrace-01.png",
    "05-terrace-02.png",
    "06-rooftop-001.png",
    "07-rooftop-002.png",
    "08-terrace-04.png",
  ],
};

const interiorImages = Object.fromEntries(
  Object.entries(interiorAssets).map(([project, files]) => [
    project,
    files.map((file) => `assets/interior/${project}/${file}`),
  ])
);

const importedInteriorProjects = [
  {
    id: "cresyn",
    category: "interior",
    subcategory: "rendering",
    year: "2025",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/cresyn/03-2b-livingroom-0507.png",
    images: interiorImages.cresyn,
    title: { en: "Cresyn", zh: "Cresyn" },
    description: {
      en: "A sunlit residential set with city views, soft upholstery, brass accents, and warm neutral finishes.",
      zh: "一组明亮的城市住宅效果图，以落地窗景、柔软家具、黄铜点缀和温暖中性色为主。",
    },
    details: {
      en: "This set covers the living room, lobby, bedrooms, terrace, and bathrooms. Cream textiles, curved furniture, daylight, and restrained material contrasts give the project a warm tone between residential comfort and hotel polish.",
      zh: "图集涵盖客厅、大堂、卧室、露台与卫浴。奶油色织物、弧形家具、自然光和克制的材质对比，让空间兼具住宅的舒适与酒店的精致。",
    },
    role: { en: "Interior rendering, material mood, visual sequencing", zh: "室内效果图、材质氛围、图组叙事" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Sunlit interiors", "Warm neutrals", "City view"],
      zh: ["自然采光", "温暖中性色", "城市景观"],
    },
  },
  {
    id: "the-pople",
    category: "interior",
    subcategory: "rendering",
    year: "2026",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/the-pople/13-lobby002-0710.png",
    images: interiorImages["the-pople"],
    title: { en: "The Pople", zh: "The Pople" },
    description: {
      en: "A refined residential amenity set pairing warm lobby interiors with landscaped rooftop lounges and compact stone bathrooms.",
      zh: "一组精致的住宅配套空间效果图，以暖色大堂、景观屋顶休闲区和紧凑石材卫浴构成完整场景。",
    },
    details: {
      en: "The project develops a consistent hospitality language across shared and private spaces. Pale oak, bronze metalwork, textured stone, integrated lighting, restrained planting, and neutral upholstery create a calm transition from lobby arrival to rooftop gathering and bathroom routines.",
      zh: "项目在公共与私密空间之间建立统一的酒店式语言。浅色木饰面、青铜金属、肌理石材、嵌入式灯光、克制绿植与中性软装，共同串联大堂抵达、屋顶社交和卫浴使用场景。",
    },
    role: { en: "Interior rendering, amenity visualization, material development", zh: "室内效果图、配套空间可视化、材质深化" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Lobby", "Roof terrace", "Bathrooms"],
      zh: ["大堂", "屋顶露台", "卫浴"],
    },
  },
  {
    id: "mv-54k",
    category: "interior",
    subcategory: "rendering",
    year: "2024",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/mv-54k/03-living-2.jpg",
    images: interiorImages["mv-54k"],
    title: { en: "MV_54k", zh: "MV_54k" },
    description: {
      en: "A bright high-rise apartment study using white volume, marble surfaces, gold accents, and skyline light.",
      zh: "明亮的高层公寓效果图研究，以白色体块、大理石、金属点缀和城市天际线采光组织画面。",
    },
    details: {
      en: "The open kitchen and living areas use pale flooring, framed views, and a few warm metal accents. The result is bright, polished, and suitable for real estate marketing.",
      zh: "开放式厨房与客厅采用浅色地面、开阔窗景和少量暖金属点缀，画面明亮、整洁，适合地产销售展示。",
    },
    role: { en: "Residential visualization, lighting, furnishing direction", zh: "住宅可视化、灯光、软装方向" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["High-rise living", "Marble", "Light contemporary"],
      zh: ["高层住宅", "大理石", "轻奢"],
    },
  },
  {
    id: "mps-two",
    category: "interior",
    subcategory: "rendering",
    year: "2024",
    location: { en: "Long Island City, NY", zh: "纽约长岛市" },
    image: "assets/interior/mps-two/01-living-room-3.jpg",
    images: interiorImages["mps-two"],
    title: { en: "Vesta LIC", zh: "Vesta LIC" },
    description: {
      en: "A compact apartment set balancing practical kitchen storage, soft seating, and restrained neutral styling.",
      zh: "紧凑公寓图组，平衡厨房收纳、柔和家具和克制的中性色软装表达。",
    },
    details: {
      en: "The renderings focus on a compact apartment. White cabinetry, warm wood floors, integrated appliances, and rounded furniture make the small footprint practical without feeling rigid.",
      zh: "这组效果图围绕紧凑公寓展开。白色柜体、暖木地板、嵌入式电器和圆润家具，让小空间兼顾实用与舒适。",
    },
    role: { en: "Small-space rendering, kitchen study, furniture scale", zh: "小空间效果图、厨房研究、家具尺度" },
    tools: "SketchUp, 3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Compact living", "Kitchen planning", "Soft minimalism"],
      zh: ["紧凑居住", "厨房规划", "柔和极简"],
    },
  },
  {
    id: "410-west",
    category: "interior",
    subcategory: "rendering",
    year: "2026",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/410-west/01-living-2.png",
    images: interiorImages["410-west"],
    title: { en: "410 WEST", zh: "410 WEST" },
    description: {
      en: "A full residential rendering package spanning living, kitchen, bedroom, and bath with quiet urban warmth.",
      zh: "完整住宅效果图图包，覆盖客厅、厨房、卧室和卫浴，以安静的城市暖调组织整体氛围。",
    },
    details: {
      en: "Soft daylight, pale upholstery, wood, stone, and black-framed details carry a consistent material language from room to room.",
      zh: "柔和日光、浅色织物、木材、石材与黑色边框细节贯穿不同房间，形成统一的公寓材质语言。",
    },
    role: { en: "Multi-room rendering set, finish direction, presentation views", zh: "多房间效果图、饰面方向、展示视角" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Apartment set", "Wood and stone", "Quiet warmth"],
      zh: ["公寓", "木与石材", "安静暖调"],
    },
  },
  {
    id: "tfa",
    category: "interior",
    subcategory: "rendering",
    year: "2025",
    location: { en: "Astoria, NY", zh: "纽约阿斯托里亚" },
    image: "assets/interior/tfa/06-living-rm-1.jpg",
    images: interiorImages.tfa,
    title: { en: "The Frame Astoria", zh: "The Frame Astoria" },
    description: {
      en: "A bright loft-like interior and staging set with tall glazing, pale finishes, and before-after furnishing studies.",
      zh: "明亮的 loft 感室内与 staging 图组，包含高窗、浅色饰面以及软装前后对比研究。",
    },
    details: {
      en: "The set includes living rooms, bedrooms, a gym, terrace, dining area, and staging comparisons. Black window frames and marble details give definition to the otherwise light, quiet palette.",
      zh: "图集包括客厅、卧室、健身区、露台、餐厅与软装前后对比。黑色窗框和大理石细节为整体浅色、安静的空间增加清晰层次。",
    },
    role: { en: "Staging visualization, room-by-room rendering, atmosphere study", zh: "软装 staging 可视化、分房间效果图、氛围研究" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Staging", "Loft light", "Before and after"],
      zh: ["软装布置", "挑高采光", "前后对比"],
    },
  },
  {
    id: "athena",
    category: "interior",
    subcategory: "rendering",
    year: "2024",
    location: { en: "Long Island City, NY", zh: "纽约长岛市" },
    image: "assets/interior/athena/06-lobby-camera-001.jpg",
    images: interiorImages.athena,
    title: { en: "Athena", zh: "Athena" },
    description: {
      en: "A mixed lobby and residential visualization set for Athena LIC, pairing warm public spaces with clean apartment views.",
      zh: "Athena LIC 的大堂与住宅效果图组合，将温暖公共空间和清爽公寓视角结合起来。",
    },
    details: {
      en: "Dark wood, a marble reception desk, linear lighting, and signage shape the lobby arrival. The apartment views use a lighter palette across living, bedroom, dining, terrace, and exterior scenes.",
      zh: "大堂以深木色、石材接待台、线性灯光和标识建立到达感；公寓部分转向更轻盈的配色，包括客厅、卧室、餐厅、露台与外部视角。",
    },
    role: { en: "Lobby rendering, residential views, branded atmosphere", zh: "大堂效果图、住宅视角、品牌氛围" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Lobby", "Residential", "Branded lobby"],
      zh: ["大堂", "住宅", "品牌氛围"],
    },
  },
  {
    id: "the-prince",
    category: "interior",
    subcategory: "rendering",
    year: "2025",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/the-prince/01-view-0312-2.png",
    images: interiorImages["the-prince"],
    title: { en: "The Prince", zh: "The Prince" },
    description: {
      en: "A concise exterior and kitchen study with crisp city-facing terraces, glass guardrails, and clean millwork.",
      zh: "精简的外立面与厨房图组，包含面向城市的露台、玻璃栏杆和干净的柜体表达。",
    },
    details: {
      en: "The set combines terrace views with kitchen material studies. Clear glazing, pale facade surfaces, and precise cabinetry keep the presentation direct and consistent.",
      zh: "图集结合露台视角与厨房材质研究。清透玻璃、浅色立面和利落柜体，让整组表达保持直接、统一。",
    },
    role: { en: "Exterior visualization, kitchen rendering, presentation selection", zh: "外部可视化、厨房效果图、汇报选图" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Terrace", "Kitchen", "Urban exterior"],
      zh: ["露台", "厨房", "城市外部"],
    },
  },
  {
    id: "the-parisian",
    category: "interior",
    subcategory: "rendering",
    year: "2026",
    location: { en: "New York, NY", zh: "纽约" },
    image: "assets/interior/the-parisian/07-rooftop-002.png",
    images: interiorImages["the-parisian"],
    title: { en: "The Parisian", zh: "The Parisian" },
    description: {
      en: "A rooftop and terrace amenity sequence with dusk skyline views, planted edges, lounge seating, and play zones.",
      zh: "屋顶与露台公共空间图组，包含傍晚天际线、绿化边界、休闲座位和活动分区。",
    },
    details: {
      en: "The rooftop study brings together skyline views, evening light, seating groups, planters, glass reflections, and a small play area. The goal is a clear, connected amenity layout.",
      zh: "屋顶方案整合城市景观、傍晚光线、休闲座位、花池、玻璃反射和小型活动场地，重点梳理清晰、连续的配套空间。",
    },
    role: { en: "Amenity rendering, rooftop atmosphere, exterior views", zh: "公共空间效果图、屋顶氛围、外部视角" },
    tools: "3ds Max, V-Ray, Photoshop",
    status: { en: "Imported image set", zh: "已导入图集" },
    tags: {
      en: ["Rooftop", "Amenity"],
      zh: ["屋顶", "公共配套"],
    },
  },
];

const importedArchitectureProjects = [
  {
    id: "1042-alderbrook-ln",
    category: "architecture",
    subcategory: "house-remodel",
    year: "2023",
    location: { en: "San Jose, CA", zh: "加州圣何塞" },
    image: "assets/architecture/1042-alderbrook-ln/07-after.webp",
    title: { en: "1042 Alderbrook Ln", zh: "1042 Alderbrook Ln" },
    description: {
      en: "A full-house remodel that turns a low, recessive frontage into a clear entry sequence and a cohesive family home.",
      zh: "一次完整住宅改造，将原本低矮、退后的临街立面重组为清晰入口与统一的家庭住宅形象。",
    },
    details: {
      en: "The work moves from plan reorganization and facade studies to roof coordination, 3D modeling, and final visualization. The completed frontage closely follows the proposed massing, entry arch, garage proportion, and light material palette.",
      zh: "项目从平面重组、立面研究推进到屋顶协调、三维模型与最终效果图。建成后的临街立面基本延续了方案中的体量、拱形入口、车库比例和浅色材料。",
    },
    role: {
      en: "Residential planning, facade design, drawing coordination, 3D modeling and visualization",
      zh: "住宅规划、立面设计、图纸协调、三维建模与效果表达",
    },
    tools: "AutoCAD, SketchUp, Lumion, Photoshop",
    status: { en: "Built and documented", zh: "已完工并记录" },
    tags: {
      en: ["Existing-condition analysis", "Design development", "Design-to-built alignment"],
      zh: ["现状分析", "方案深化", "设计与落地一致性"],
    },
    story: {
      beforeAfter: {
        before: "assets/architecture/1042-alderbrook-ln/01-existing.webp",
        after: "assets/architecture/1042-alderbrook-ln/07-after.webp",
        beforeLabel: { en: "Before", zh: "改造前" },
        afterLabel: { en: "After", zh: "改造后" },
        title: { en: "House Remodel", zh: "住宅改造" },
      },
      process: [
        {
          image: "assets/architecture/1042-alderbrook-ln/02-floor-plan.png",
          title: { en: "Plan reorganization", zh: "平面功能重组" },
          copy: {
            en: "An open kitchen-family core, clearer bedroom zoning and consolidated service spaces improve daily circulation across the full footprint.",
            zh: "开放式厨房与家庭活动核心、清晰的卧室分区和集中的服务空间，共同改善整屋日常动线。",
          },
        },
        {
          image: "assets/architecture/1042-alderbrook-ln/03-elevation.png",
          title: { en: "Elevation control", zh: "立面比例控制" },
          copy: {
            en: "The drawing establishes the entry arch, roof intersections, openings and garage datum before the facade moves into three dimensions.",
            zh: "在进入三维阶段前，通过立面图确定入口拱形、屋顶交接、门窗开口与车库基准线。",
          },
        },
        {
          image: "assets/architecture/1042-alderbrook-ln/04-model.webp",
          title: { en: "3D coordination", zh: "三维协调推演" },
          copy: {
            en: "The SketchUp model tests curbside scale, roof depth, column weight and the transition between entry, living volume and garage.",
            zh: "SketchUp 模型用于检查街道视角尺度、屋顶进深、柱体重量，以及入口、居住体量与车库之间的过渡。",
          },
        },
      ],
      reality: {
        render: "assets/architecture/1042-alderbrook-ln/05-rendering.webp",
        site: "assets/architecture/1042-alderbrook-ln/06-site-photo.webp",
        title: { en: "Visualization tested against the built result", zh: "用实景检验效果表达" },

      },
    },
  },
  {
    id: "42014-via-san-gabriel",
    category: "architecture",
    subcategory: "house-addition",
    year: "2023",
    location: { en: "Fremont, CA", zh: "加州弗里蒙特" },
    image: "assets/architecture/42014-via-san-gabriel/06-rendering.webp",
    title: { en: "42014 Via San Gabriel", zh: "42014 Via San Gabriel" },
    description: {
      en: "A house addition and facade remodel that expands the program while giving the original ranch home a clearer contemporary identity.",
      zh: "一项住宅加建与立面改造，在扩展使用功能的同时，为原有平层住宅建立更清晰的现代形象。",
    },
    details: {
      en: "The addition expands the house around an open living area, adding private rooms and service space while giving the front elevation a deeper porch. Drawings, 3D studies, and site-photo overlays track the design from plan to construction.",
      zh: "加建围绕开放式生活区扩展住宅，增加卧室与服务空间，并通过更有进深的门廊调整正立面。图纸、三维研究和现场照片叠合记录了方案从平面到施工的推进。",
    },
    role: {
      en: "Addition planning, facade development, 3D coordination, contextual visualization",
      zh: "加建规划、立面深化、三维协调、场景化效果表达",
    },
    tools: "AutoCAD, SketchUp, Lumion, Photoshop",
    status: { en: "Construction documented", zh: "施工过程已记录" },
    tags: {
      en: ["Addition planning", "Facade development", "Context photo matching"],
      zh: ["加建规划", "立面深化", "现场照片匹配"],
    },
    story: {
      beforeAfter: {
        before: "assets/architecture/42014-via-san-gabriel/01-existing.webp",
        after: "assets/architecture/42014-via-san-gabriel/06-rendering.webp",
        beforeLabel: { en: "Before", zh: "加建前" },
        afterLabel: { en: "After", zh: "加建后" },
        title: { en: "House Addition", zh: "住宅加建" },
      },
      process: [
        {
          image: "assets/architecture/42014-via-san-gabriel/02-floor-plan.png",
          title: { en: "Program Floor Plan", zh: "功能平面图" },
          copy: {
            en: "The plan builds a larger open living center and extends private rooms and support spaces along a clear circulation spine.",
            zh: "平面形成更大的开放式生活中心，并沿清晰的交通主轴扩展卧室与配套服务空间。",
          },
        },
        {
          image: "assets/architecture/42014-via-san-gabriel/03-elevation.png",
          title: { en: "Front Elevation", zh: "正立面图" },
          copy: {
            en: "Roof pitch, porch depth, window groupings and garage alignment are resolved as a single composition before visualization.",
            zh: "在效果表达前，将屋顶坡度、门廊进深、窗组关系与车库对位统一为完整构图。",
          },
        },
        {
          image: "assets/architecture/42014-via-san-gabriel/04-model.webp",
          title: { en: "3D Model", zh: "三维模型" },
          copy: {
            en: "The standalone model verifies the new gable, entry frame, material breaks and the visual weight of the expanded frontage.",
            zh: "独立三维模型用于验证新增山墙、入口框景、材料分缝与扩建后临街面的视觉重量。",
          },
        },
        {
          image: "assets/architecture/42014-via-san-gabriel/05-context-model.webp",
          title: { en: "Context photo match", zh: "现场照片匹配" },
          copy: {
            en: "Placing the model into the construction photograph checks camera alignment, neighborhood scale and how the proposal sits against the real hillside backdrop.",
            zh: "将模型叠入施工实拍，检查相机角度、街区尺度，以及方案与真实山地背景之间的关系。",
          },
        },
      ],
      reality: {
        render: "assets/architecture/42014-via-san-gabriel/06-rendering.webp",
        site: "assets/architecture/42014-via-san-gabriel/07-site-photo.webp",
        title: { en: "Design intent compared with site progress", zh: "设计意图与现场进度对照" },
        copy: {
          en: "The visualization clarifies the intended clean finish and landscape setting; the site photograph confirms the gable, porch, openings, stone base and garage relationship during construction.",
          zh: "效果图表达最终的简洁饰面与景观方向；施工实拍则验证山墙、门廊、开口、石材基座和车库之间的实际关系。",
        },
      },
    },
  },
  {
    id: "10411-beardon-dr",
    category: "architecture",
    subcategory: "new-adu",
    year: "2022",
    location: { en: "Cupertino, CA", zh: "加州库比蒂诺" },
    image: "assets/architecture/10411-beardon-dr/05-final-render.webp",
    title: { en: "10411 Beardon Dr", zh: "10411 Beardon Dr" },
    description: {
      en: "A 740-square-foot new ADU coordinated from plan strategy and room-specific detailing through exterior massing and final visualization.",
      zh: "一项 740 平方英尺的新建 ADU，从总体平面、重点空间深化推进至外部体量与最终效果表达。",
    },
    details: {
      en: "This 740-square-foot ADU places two bedrooms, two bathrooms, and an open living, dining, and kitchen area within an efficient L-shaped plan. Annotated axonometric views resolve the kitchen and bathrooms; the exterior model coordinates roofs, openings, entries, and landscape edges before rendering.",
      zh: "这座 740 平方英尺的 ADU 以高效的 L 形平面组织两间卧室、两间卫浴，以及开放的客厅、餐厅与厨房。标注轴测图用于深化厨房和卫浴，外部模型则在效果图阶段前协调屋顶、门窗、出入口与景观边界。",
    },
    role: {
      en: "ADU planning, kitchen and bathroom development, 3D coordination, architectural visualization",
      zh: "ADU 平面规划、厨房与卫浴深化、三维协调、建筑效果表达",
    },
    tools: "Revit",
    status: { en: "Design development", zh: "方案深化" },
    tags: {
      en: ["New ADU", "740 sqft", "Revit coordination"],
      zh: ["新建 ADU", "740 平方英尺", "Revit 协调"],
    },
    story: {
      featureLabel: { en: "New ADU · Revit", zh: "新建 ADU · Revit" },
      overviewLabel: { en: "01 / New ADU", zh: "01 / 新建 ADU" },
      heroImage: "assets/architecture/10411-beardon-dr/05-final-render.webp",
      beforeAfter: {
        before: "assets/architecture/10411-beardon-dr/04-architectural-model.webp",
        after: "assets/architecture/10411-beardon-dr/05-final-render.webp",
        beforeLabel: { en: "Coordinated model", zh: "协调模型" },
        afterLabel: { en: "Final visualization", zh: "最终效果图" },
        title: { en: "740 SQFT NEW ADU", zh: "740 SQFT NEW ADU" },
        copy: {
          en: "This compact two-bedroom ADU uses an efficient plan, simple roof geometry, sheltered entries, a restrained material palette, and a planted residential setting.",
          zh: "这座紧凑的两卧室 ADU 采用高效平面、简洁的屋顶几何、遮蔽式入口和克制的材料，并以住宅景观衔接室内外。",
        },
      },
      process: [
        {
          image: "assets/architecture/10411-beardon-dr/01-floor-plan.webp",
          title: { en: "Whole-house plan strategy", zh: "整屋平面策略" },
          copy: {
            en: "The plan clarifies circulation through an L-shaped footprint, linking living, dining, and kitchen spaces while maintaining distinct bedroom and bathroom zones.",
            zh: "平面在 L 形建筑轮廓内梳理交通，将客厅、餐厅与厨房连成连续生活核心，同时保持卧室和卫浴的独立分区。",
          },
          theme: { background: "#aaa8a4", text: "#fffdf8" },
        },
        {
          image: "assets/architecture/10411-beardon-dr/02-kitchen-axon.webp",
          title: { en: "Kitchen workflow and millwork", zh: "厨房动线与柜体深化" },
          copy: {
            en: "The annotated axonometric study coordinates appliance positions, full-height storage, work surfaces, the island, and the relationship between the kitchen and front entry.",
            zh: "标注轴测图协调冰箱、洗烘设备、高柜、操作台、岛台，以及厨房与前门之间的空间关系。",
          },
          theme: { background: "#aaa79f", text: "#fffdf8" },
        },
        {
          image: "assets/architecture/10411-beardon-dr/03-bath-axon.webp",
          title: { en: "Bathroom fixture and finish study", zh: "卫浴设备与饰面研究" },
          copy: {
            en: "Fixtures, vanity storage, wet-area tile, feature walls, and lighting are resolved together so the compact room reads clearly before documentation.",
            zh: "将洁具、浴室柜收纳、湿区墙地砖、特色墙与照明一并推演，使紧凑空间在进入施工图阶段前保持清晰完整。",
          },
          theme: { background: "#b4b1a8", text: "#fffdf8" },
        },
        {
          image: "assets/architecture/10411-beardon-dr/04-architectural-model.webp",
          title: { en: "Exterior massing coordination", zh: "外部体量协调" },
          copy: {
            en: "The model verifies roof junctions, porch depth, door and window alignment, and the relationship between the two connected residential volumes.",
            zh: "建筑模型用于验证屋顶交接、门廊进深、门窗对位，以及两个相连住宅体量之间的比例关系。",
          },
          theme: { background: "#5d625c", text: "#fffdf8" },
        },
      ],
    },
  },
];

const architectureStoryCopy = {
  en: {
    overview: "01 / Transformation",
    before: "Before / Existing",
    process: "02 / Design process",
    processNote: "The following studies show how the design developed from plan to built form.",
    reality: "03 / Render vs. site",
    render: "Design rendering",
    site: "Site photograph",
    feature: "Before / After · Process",
  },
  zh: {
    overview: "01 / 改造对比",
    before: "改造前 / 现状",
    process: "02 / 设计步骤",
    processNote: "以下图纸与模型按顺序呈现方案从平面到建筑体量的推进。",
    reality: "03 / 效果图与实拍",
    render: "设计效果图",
    site: "现场实拍",
    feature: "改造前后 · 设计过程",
  },
};

const hiddenProjectIds = new Set([
  "the-pople", // Temporarily hidden; keep its project data for restoration.
  "courtyard-remodel",
  "side-yard-addition",
  "kitchen-bath-rework",
  "daycare-learning-room",
  "compact-floorplan",
  "warm-rendering-set",
]);

projects.push(...importedInteriorProjects);
projects.push(...importedArchitectureProjects);

const state = {
  language: "en",
  category: "all",
  subcategory: "all",
};

let revealObserver;
let scrollTicking = false;
let lastScrollY = window.scrollY;
let pointerFine = window.matchMedia("(pointer: fine)").matches;
let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const elements = {
  siteHeader: document.querySelector(".site-header"),
  scrollProgress: document.getElementById("scrollProgress"),
  cursorOrb: document.getElementById("cursorOrb"),
  hero: document.querySelector(".hero"),
  languageToggle: document.getElementById("languageToggle"),
  heroMeta: document.querySelector(".hero-meta"),
  categoryFilters: document.getElementById("categoryFilters"),
  focusBlocks: document.querySelector(".focus-blocks"),
  projectGrid: document.getElementById("projectGrid"),
  projectCount: document.getElementById("projectCount"),
  modal: document.getElementById("projectModal"),
  modalPanel: document.querySelector(".modal-panel"),
  modalImage: document.getElementById("modalImage"),
  modalGallery: document.getElementById("modalGallery"),
  modalKicker: document.getElementById("modalKicker"),
  modalTitle: document.getElementById("modalTitle"),
  modalDescription: document.getElementById("modalDescription"),
  modalMeta: document.getElementById("modalMeta"),
  modalTags: document.getElementById("modalTags"),
};

function t(key) {
  return copy[state.language][key] || key;
}

function getCategoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.[state.language] || categoryId;
}

function getSubcategoryLabel(subcategoryId) {
  return subcategoryLabels[subcategoryId]?.[state.language] || subcategoryId;
}

function renderStaticCopy() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = t("site.title");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  elements.languageToggle.textContent = state.language === "en" ? "中文" : "EN";
  elements.languageToggle.setAttribute("aria-label", t("language.aria"));
  document.querySelector(".modal-close").setAttribute("aria-label", t("modal.close"));

  renderList("designScopeList", listCopy[state.language].designScope);
  renderSoftwareList();
}

function renderList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderSoftwareList() {
  const list = document.getElementById("softwareList");
  list.className = "software-grid";
  list.innerHTML = softwareTools
    .map(
      (tool) => `
        <li class="software-item" aria-label="${tool.name}" title="${tool.name}">
          <span class="software-icon" aria-hidden="true" data-fallback="${tool.fallback}">
            <img src="${tool.icon}" alt="" loading="lazy" />
          </span>
        </li>
      `
    )
    .join("");

  list.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".software-icon").classList.add("has-fallback");
      image.remove();
    });
  });
}

function renderFilters() {
  elements.categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-button ${state.category === category.id ? "is-active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${category[state.language]}
        </button>
      `
    )
    .join("");
}

function getFilteredProjects() {
  return projects.filter((project) => {
    if (hiddenProjectIds.has(project.id)) {
      return false;
    }

    const categoryMatches = state.category === "all" || project.category === state.category;
    const subcategoryMatches = state.subcategory === "all" || project.subcategory === state.subcategory;
    return categoryMatches && subcategoryMatches;
  });
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  const groupedProjects =
    state.category === "all" && state.subcategory === "all"
      ? categories
          .filter((category) => category.id !== "all")
          .flatMap((category) => {
            const categoryProjects = filteredProjects.filter((project) => project.category === category.id);

            if (!categoryProjects.length) {
              return [];
            }

            return [{ type: "divider", category }, ...categoryProjects.map((project) => ({ type: "project", project }))];
          })
      : filteredProjects.map((project) => ({ type: "project", project }));

  elements.projectCount.textContent =
    state.language === "en"
      ? `${filteredProjects.length} ${filteredProjects.length === 1 ? t("count.single") : t("count.multiple")}`
      : `显示 ${filteredProjects.length} ${t("count.multiple")}`;

  elements.projectGrid.innerHTML = groupedProjects
    .map((item) => {
      if (item.type === "divider") {
        return `
          <div class="project-category-divider" data-reveal>
            <span>${item.category[state.language]}</span>
          </div>
        `;
      }

      const { project } = item;
      const title = project.title[state.language];
      const projectLocation = project.location?.[state.language] || project.location?.en || "";
      const projectSummary = projectLocation ? `${project.year} · ${projectLocation}` : project.year;
      const coverImage = project.image || project.images?.[0];

      return `
        <button class="project-card" type="button" data-project-id="${project.id}" data-reveal aria-label="${title}">
          <span class="project-image">
            <img src="${coverImage}" alt="${title}" loading="lazy" />
          </span>
          <span class="project-body">
            ${
              project.story
                ? `<span class="project-feature">${
                    project.story.featureLabel?.[state.language] || architectureStoryCopy[state.language].feature
                  }</span>`
                : ""
            }
            <span class="project-title">${title}</span>
            <span class="project-description">${projectSummary}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderAll() {
  renderStaticCopy();
  renderFilters();
  renderProjects();
  setupReveal();
}

function setupReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]:not(.is-observed)");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible", "is-observed"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );
  }

  revealItems.forEach((item, index) => {
    item.classList.add("is-observed");
    item.style.transitionDelay = `${Math.min(index * 60, 260)}ms`;
    revealObserver.observe(item);
  });

  requestAnimationFrame(() => {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;

      if (isInView) {
        item.classList.add("is-visible");
        revealObserver.unobserve(item);
      }
    });
  });
}

function updateScrollEffects() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress * 100}%`);

  if (!reduceMotion && elements.hero) {
    const shift = Math.min(window.scrollY * 0.08, 36);
    document.documentElement.style.setProperty("--hero-parallax", `${shift}px`);
  }

  if (elements.siteHeader) {
    const currentScrollY = window.scrollY;
    const heroLimit = elements.hero ? elements.hero.offsetHeight - 80 : 120;
    const scrollingDown = currentScrollY > lastScrollY + 4;
    const scrollingUp = currentScrollY < lastScrollY - 4;

    if (currentScrollY > heroLimit && scrollingDown) {
      elements.siteHeader.classList.add("is-hidden");
    }

    if (currentScrollY <= heroLimit || scrollingUp) {
      elements.siteHeader.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
  }

  scrollTicking = false;
}

function requestScrollEffects() {
  if (scrollTicking) {
    return;
  }

  scrollTicking = true;
  window.requestAnimationFrame(updateScrollEffects);
}

function setupPointerEffects() {
  if (!pointerFine || reduceMotion || !elements.cursorOrb) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    elements.cursorOrb.classList.add("is-visible");
    elements.cursorOrb.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%) scale(1)`;
  });

  window.addEventListener("pointerleave", () => {
    elements.cursorOrb.classList.remove("is-visible");
  });
}

function addClickRipple(event) {
  if (reduceMotion) {
    return;
  }

  const target = event.target.closest(
    ".language-toggle, .filter-button, .project-card, .focus-block, .hero-chip, .email-link, .modal-close"
  );

  if (!target) {
    return;
  }

  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height) * 1.8;
  ripple.className = "click-ripple";
  ripple.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
  ripple.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
  ripple.style.setProperty("--ripple-size", `${size}px`);
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function setupProjectTilt() {
  if (!pointerFine || reduceMotion) {
    return;
  }

  elements.projectGrid.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".project-card");
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-y", `${x * 4.5}deg`);
    card.style.setProperty("--tilt-x", `${y * -4.5}deg`);
  });

  elements.projectGrid.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".project-card");
    if (!card || card.contains(event.relatedTarget)) {
      return;
    }

    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--tilt-x", "0deg");
  });
}

function renderArchitectureStory(project, title) {
  const labels = architectureStoryCopy[state.language];
  const story = project.story;
  const beforeAfter = story.beforeAfter;
  const reality = story.reality;
  const overviewLabel = story.overviewLabel?.[state.language] || labels.overview;
  const beforeLabel = beforeAfter.beforeLabel?.[state.language] || labels.before;
  const hasColorBackedSteps = story.process.some((step) => step.theme);
  const processSteps = story.process
    .map((step, index) => {
      const themeStyle = step.theme
        ? ` style="--step-bg: ${step.theme.background}; --step-text: ${step.theme.text};"`
        : "";

      return `
        <article class="architecture-process-step${step.theme ? " is-color-backed" : ""}"${themeStyle}>
          <div class="architecture-process-copy">
            <span class="architecture-step-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${step.title[state.language]}</h3>
            <p>${step.copy[state.language]}</p>
          </div>
          <div class="architecture-process-image">
            <img src="${step.image}" alt="${title} - ${step.title[state.language]}" loading="lazy" />
          </div>
        </article>
      `;
    })
    .join("");

  const overviewVisual = story.heroImage
    ? `
        <div class="architecture-hero-visual">
          <img src="${story.heroImage}" alt="${title} - ${beforeAfter.afterLabel[state.language]}" />
        </div>
      `
    : `
        <div class="architecture-comparison">
          <figure class="architecture-comparison-card">
            <div class="architecture-comparison-image">
              <img src="${beforeAfter.before}" alt="${title} - ${beforeLabel}" />
            </div>
            <figcaption>${beforeLabel}</figcaption>
          </figure>
          <figure class="architecture-comparison-card">
            <div class="architecture-comparison-image">
              <img src="${beforeAfter.after}" alt="${title} - ${beforeAfter.afterLabel[state.language]}" />
            </div>
            <figcaption>${beforeAfter.afterLabel[state.language]}</figcaption>
          </figure>
        </div>
      `;

  const realitySection = reality
    ? `
      <section class="architecture-story-section">
        <header class="architecture-story-heading">
          <p>${reality.label?.[state.language] || labels.reality}</p>
          <h3>${reality.title[state.language]}</h3>
          ${reality.copy?.[state.language] ? `<span>${reality.copy[state.language]}</span>` : ""}
        </header>
        <div class="architecture-comparison architecture-reality-comparison">
          <figure class="architecture-comparison-card">
            <div class="architecture-comparison-image">
              <img src="${reality.render}" alt="${title} - ${reality.renderLabel?.[state.language] || labels.render}" loading="lazy" />
            </div>
            <figcaption>${reality.renderLabel?.[state.language] || labels.render}</figcaption>
          </figure>
          <figure class="architecture-comparison-card">
            <div class="architecture-comparison-image">
              <img src="${reality.site}" alt="${title} - ${reality.siteLabel?.[state.language] || labels.site}" loading="lazy" />
            </div>
            <figcaption>${reality.siteLabel?.[state.language] || labels.site}</figcaption>
          </figure>
        </div>
      </section>
    `
    : "";

  return `
    <div class="architecture-story">
      <section class="architecture-story-section${story.heroImage ? " architecture-hero-section" : ""}">
        <header class="architecture-story-heading">
          <p>${overviewLabel}</p>
          <h3>${beforeAfter.title[state.language]}</h3>
          ${beforeAfter.copy?.[state.language] ? `<span>${beforeAfter.copy[state.language]}</span>` : ""}
        </header>
        ${overviewVisual}
      </section>

      <section class="architecture-story-section architecture-process">
        <header class="architecture-story-heading architecture-process-heading">
          <p>${labels.process}</p>
          <span>${labels.processNote}</span>
        </header>
        <div class="architecture-process-list${hasColorBackedSteps ? " has-color-backed-steps" : ""}">
          ${processSteps}
        </div>
      </section>

      ${realitySection}
    </div>
  `;
}
function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) {
    return;
  }

  const category = getCategoryLabel(project.category);
  const subcategory = getSubcategoryLabel(project.subcategory);
  const title = project.title[state.language];
  const galleryImages = project.images?.length ? project.images : [project.image];
  const coverImage = project.image || galleryImages[0];
  const supportingImages = galleryImages.filter((image) => image !== coverImage);

  elements.modalPanel.classList.toggle("is-architecture-project", Boolean(project.story));
  elements.modalImage.hidden = Boolean(project.story);
  elements.modalGallery.classList.toggle("is-architecture-story", Boolean(project.story));

  if (project.story) {
    elements.modalImage.removeAttribute("src");
    elements.modalImage.alt = "";
    elements.modalGallery.innerHTML = renderArchitectureStory(project, title);
  } else {
    elements.modalImage.src = coverImage;
    elements.modalImage.alt = title;
    elements.modalGallery.innerHTML = supportingImages
      .map((image, index) => `<img src="${image}" alt="${title} ${index + 2}" loading="lazy" />`)
      .join("");
  }
  elements.modalKicker.textContent = `${category} / ${subcategory} / ${project.year}`;
  elements.modalTitle.textContent = title;
  elements.modalDescription.textContent = project.details[state.language];
  elements.modalMeta.innerHTML = `
    <p><strong>${t("modal.type")}</strong><span>${subcategory}</span></p>
    <p><strong>${t("modal.tools")}</strong><span>${project.tools}</span></p>
  `;
  elements.modalTags.innerHTML = project.tags[state.language].map((tag) => `<span>${tag}</span>`).join("");

  elements.modal.classList.add("is-open");
  elements.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeProject() {
  elements.modal.classList.remove("is-open");
  elements.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

elements.languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "zh" : "en";
  renderAll();

  if (elements.modal.classList.contains("is-open")) {
    const openTitle = elements.modalTitle.textContent;
    const currentProject = projects.find(
      (project) => project.title.en === openTitle || project.title.zh === openTitle
    );
    if (currentProject) {
      openProject(currentProject.id);
    }
  }
});

elements.categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  state.subcategory = "all";
  renderFilters();
  renderProjects();
  setupReveal();
});

elements.focusBlocks.addEventListener("click", (event) => {
  const block = event.target.closest("[data-focus-category]");
  if (!block) {
    return;
  }

  state.category = block.dataset.focusCategory;
  state.subcategory = "all";
  renderFilters();
  renderProjects();
  setupReveal();
  document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.heroMeta.addEventListener("pointermove", (event) => {
  const chip = event.target.closest(".hero-chip");
  if (!chip) {
    return;
  }

  const rect = chip.getBoundingClientRect();
  chip.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  chip.style.setProperty("--my", `${event.clientY - rect.top}px`);
});

elements.heroMeta.addEventListener("click", (event) => {
  const chip = event.target.closest(".hero-chip");
  if (!chip) {
    return;
  }

  if (chip.dataset.highlightSection) {
    document.getElementById(chip.dataset.highlightSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  state.category = chip.dataset.highlightCategory || "all";
  state.subcategory = chip.dataset.highlightSubcategory || "all";
  renderFilters();
  renderProjects();
  setupReveal();
  document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (card) {
    openProject(card.dataset.projectId);
  }
});

document.querySelectorAll("[data-close-modal]").forEach((node) => {
  node.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.modal.classList.contains("is-open")) {
    closeProject();
  }
});

window.addEventListener("scroll", requestScrollEffects, { passive: true });
window.addEventListener("resize", requestScrollEffects);
document.addEventListener("click", addClickRipple);

setupPointerEffects();
setupProjectTilt();
updateScrollEffects();
renderAll();
