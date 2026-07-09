import { ref, computed } from 'vue';

// Reactive global locale state ('vi' or 'en')
const currentLocale = ref(localStorage.getItem('locale') || 'en');

const translations = {
  vi: {
    brand: 'anhnv',
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      contact: 'Liên hệ',
      downloadCv: 'Tải CV'
    },
    hero: {
      greeting: '👋 Xin chào, tôi là',
      name: 'Nguyễn Việt Anh',
      role: 'Fullstack Developer',
      description: 'Lập trình viên Fullstack với 3 năm kinh nghiệm thực chiến. Thành thạo PHP (Laravel, Yii2), Node.js (NestJS), VueJS và quản trị cơ sở dữ liệu. Đam mê xây dựng các hệ thống e-learning, e-commerce bền vững và tối ưu hiệu suất chuyên sâu.',
      viewProjects: 'Xem dự án',
      contactMe: 'Liên hệ',
      expYears: 'Năm kinh nghiệm',
      completedPrjs: 'Dự án hoàn thành',
      skillsMastered: 'Công nghệ sử dụng',
      sysAvailability: 'Sẵn sàng hệ thống'
    },
    about: {
      tagline: 'Hồ sơ cá nhân',
      title: 'Giới thiệu về tôi',
      subtitle: 'Hành trình học tập và triết lý lập trình của tôi',
      whoAmI: 'Tôi là ai?',
      bioParagraph1: 'Tôi tên là <strong>Nguyễn Việt Anh</strong>, một nhà phát triển Fullstack trẻ tuổi và đầy nhiệt huyết đang sinh sống tại Hà Nội. Hành trình của tôi bắt đầu tại <strong>FPT Aptech</strong>, nơi tôi đã được đào tạo bài bản về tư duy lập trình và kỹ thuật phần mềm.',
      bioParagraph2: 'Trong suốt 3 năm làm việc thực tế tại các doanh nghiệp lớn, tôi đã trực tiếp tham gia xây dựng, duy trì các hệ thống cốt lõi như LMS (Hệ thống quản lý học tập), sàn Thương mại điện tử, và nền tảng Affiliate Marketing. Tôi không chỉ viết code để hệ thống hoạt động, mà luôn hướng tới việc tối ưu hóa hiệu năng, giảm tải cho cơ sở dữ liệu và xây dựng những giải pháp có tính tái sử dụng cao.',
      quote: 'Viết code sạch, thiết kế hệ thống tối ưu và không ngừng nâng cấp trải nghiệm người dùng là kim chỉ nam trong mỗi sản phẩm tôi tạo ra.',
      personalInfo: 'Thông tin cá nhân',
      fullNameLabel: 'Họ tên:',
      emailLabel: 'Email:',
      phoneLabel: 'Điện thoại:',
      locationLabel: 'Nơi ở:',
      locationVal: 'Đống Đa, Hà Nội',
      education: 'Học vấn',
      school: 'FPT Aptech',
      major: 'Chuyên ngành: Kỹ thuật phần mềm (Software Engineering)',
      eduDesc: 'Chương trình đào tạo Lập trình viên Quốc tế chất lượng cao, tập trung chuyên sâu vào lập trình hệ thống, phát triển ứng dụng web doanh nghiệp và cơ sở dữ liệu.'
    },
    experience: {
      tagline: 'Hành trình sự nghiệp',
      title: 'Kinh nghiệm làm việc',
      subtitle: 'Các cột mốc phát triển và đóng góp tại các doanh nghiệp công nghệ',
      present: 'Hiện tại',
      unica: {
        company: 'Unica JSC',
        role: 'Fullstack Developer',
        desc: 'Thiết kế, phát triển và bảo trì các nền tảng e-learning (LMS), cộng đồng chuyên gia và tiếp thị liên kết (affiliate) phục vụ hàng chục ngàn học viên.',
        duties: [
          'Tham gia phát triển API backend bằng Laravel/NestJS và tối ưu hóa hệ thống lưu trữ dữ liệu MySQL, MongoDB.',
          'Xây dựng và tích hợp các cổng thanh toán, hệ thống thi trắc nghiệm trực tuyến (examination), theo dõi chuyển đổi affiliate.',
          'Tối ưu hóa hiệu năng ứng dụng bằng Redis caching, xử lý tác vụ nền bất đồng bộ qua RabbitMQ.',
          'Quản trị hệ thống máy chủ Linux, cài đặt Nginx và cấu hình môi trường triển khai Docker.'
        ]
      },
      mkt: {
        company: 'MKT Solutions JSC',
        role: 'Fullstack Developer',
        desc: 'Tham gia nghiên cứu, phát triển và tối ưu hóa các nền tảng thương mại điện tử (e-commerce) đa phân phối và tiếp thị liên kết (Affiliate Hub).',
        duties: [
          'Hợp tác chặt chẽ với đội ngũ Frontend và Business để hiện thực hóa các yêu cầu sản phẩm, tối ưu UI/UX.',
          'Thiết kế cơ sở dữ liệu MySQL, lập trình RESTful APIs đáp ứng nhu cầu xử lý dữ liệu lớn.',
          'Tích hợp các cổng thanh toán nội địa và quốc tế, triển khai cơ chế Redis cache cải thiện tốc độ tải trang chủ.',
          'Hỗ trợ quản trị và triển khai ứng dụng lên môi trường VPS Linux, tối ưu cấu hình máy chủ web.'
        ]
      }
    },
    skills: {
      tagline: 'Năng lực chuyên môn',
      title: 'Kỹ năng công nghệ',
      subtitle: 'Các công nghệ, cơ sở dữ liệu và công cụ tôi sử dụng để xây dựng sản phẩm'
    },
    projects: {
      tagline: 'Sản phẩm thực tế',
      title: 'Dự án tiêu biểu',
      subtitle: 'Các hệ thống, nền tảng tôi đã tham gia thiết kế và lập trình',
      filterAll: 'Tất cả dự án',
      filterEdtech: 'E-learning / EdTech',
      filterAffiliate: 'E-commerce & Affiliate',
      tabOverview: 'Tổng quan',
      tabTech: 'Công nghệ',
      tabDuties: 'Nhiệm vụ',
      teamSizeLabel: 'Quy mô team:',
      teamSizeVal: 'thành viên',
      webLabel: 'Trang web:',
      techHighlights: 'Điểm nhấn kỹ thuật:',
      visitWeb: 'Ghé thăm website',
      list: {
        affiliateUnica: {
          title: 'Affiliate Unica',
          description: 'Hệ thống quản lý tiếp thị liên kết đa chiều dành cho Unica (Network - Manager - Affiliate - Advertiser). Xử lý dữ liệu chuyển đổi lớn và tính toán hoa hồng tự động.',
          techDetails: [
            'Sử dụng NestJS xây dựng RESTful APIs xử lý báo cáo dữ liệu lớn.',
            'Sử dụng VueJS phát triển bảng điều khiển admin quản lý chiến dịch.',
            'RabbitMQ xử lý hàng đợi các lượt chuyển đổi (conversions) bất đồng bộ.',
            'Redis tăng tốc độ xuất báo cáo và lưu vết nhấp chuột (clicks).'
          ],
          duties: [
            'Phát triển tính năng và APIs quản lý chiến dịch affiliate.',
            'Xây dựng phân hệ tính toán và đối soát hoa hồng cho các bên.',
            'Tối ưu hóa các truy vấn báo cáo sản lượng sử dụng Redis và RabbitMQ.'
          ]
        },
        idQuiz: {
          title: 'ID QUIZ',
          description: 'Nền tảng học tập trực tuyến và luyện thi trắc nghiệm chất lượng cao dành cho học sinh trung học phổ thông, hỗ trợ ôn thi tốt nghiệp và đánh giá năng lực.',
          techDetails: [
            'Cấu trúc Laravel nguyên bản giúp tối ưu hóa nghiệp vụ trắc nghiệm.',
            'RabbitMQ và Redis xử lý chấm thi hàng loạt và tính điểm thời gian thực.',
            'Hệ thống lưu vết làm bài của học sinh để đưa ra gợi ý ôn tập.'
          ],
          duties: [
            'Thiết kế và phát triển phân hệ thi cử, tạo đề và ngân hàng câu hỏi.',
            'Thiết kế và tối ưu hóa cấu trúc cơ sở dữ liệu lưu lịch sử làm bài.',
            'Tích hợp hàng đợi RabbitMQ để tránh nghẽn khi có hàng ngàn học sinh cùng nộp bài.'
          ]
        },
        edubitMe: {
          title: 'Edubit Me',
          description: 'Nền tảng game học tập tương tác hỗ trợ giáo viên tổ chức lớp học trực tuyến sinh động, tích hợp giữa API NestJS và client game thời gian thực.',
          techDetails: [
            'NestJS quản lý luồng dữ liệu game và người chơi.',
            'WebSocket (Socket.io) đảm bảo độ trễ cực thấp cho phản hồi đáp án game.',
            'MongoDB lưu trữ dữ liệu phi cấu trúc của các mẫu câu hỏi và kết quả chơi game.'
          ],
          duties: [
            'Phát triển các APIs backend bằng NestJS quản lý phòng game.',
            'Thiết lập kết nối thời gian thực qua WebSocket đồng bộ trạng thái giữa người chơi và giáo viên.',
            'Xử lý logic trò chơi, bảng xếp hạng và lưu trữ lịch sử chơi.'
          ]
        },
        unicaExpert: {
          title: 'Unica Expert',
          description: 'Mạng xã hội học tập tích hợp tiếp thị liên kết, cho phép người dùng tự tạo cộng đồng chia sẻ tri thức và khai thác hoa hồng từ việc bán khóa học.',
          techDetails: [
            'NestJS làm backend REST API, MongoDB làm cơ sở dữ liệu chính cho bài đăng và comment.',
            'Redis lưu cache các bài viết phổ biến giúp giảm tải MongoDB.',
            'VueJS xây dựng giao diện mạng xã hội mượt mà dạng SPA.'
          ],
          duties: [
            'Phát triển các tính năng cộng đồng (bài đăng, bình luận, tương tác).',
            'Xây dựng các APIs phục vụ quản trị chiến dịch affiliate tích hợp trong nhóm.',
            'Cấu hình Redis cache nâng cao trải nghiệm tải dữ liệu bảng tin.'
          ]
        },
        edubit: {
          title: 'Edubit.vn',
          description: 'Nền tảng tạo website bán khóa học riêng cho giảng viên, hỗ trợ tự động hóa thanh toán, cấp quyền học viên và bảo mật video bài giảng.',
          techDetails: [
            'Tích hợp sâu hệ thống quản lý học tập (LMS).',
            'MongoDB lưu thông tin khóa học và tiến trình học tập của học viên.',
            'jQuery và Ajax hỗ trợ tương tác trang học trực quan không cần tải lại.'
          ],
          duties: [
            'Phát triển phân hệ kiểm tra trắc nghiệm và ngân hàng đề thi của hệ thống.',
            'Lập trình API quản lý học viên và đồng bộ thông tin khóa học.',
            'Tối ưu hóa quy trình học tập và làm bài thi của học sinh trên frontend.'
          ]
        },
        unica: {
          title: 'Unica.vn',
          description: 'Hệ thống quản lý học tập trực tuyến hàng đầu Việt Nam phục vụ hàng trăm ngàn người dùng, hỗ trợ quản lý khóa học, bài học, tiến độ và thanh toán.',
          techDetails: [
            'Xây dựng trên nền Yii2 framework có tính bảo mật cao.',
            'MySQL tối ưu các truy vấn tiến trình học tập phức tạp.',
            'HTML/CSS/jQuery tương thích tốt trên tất cả các trình duyệt di động.'
          ],
          duties: [
            'Phát triển và tối ưu hóa các module quản trị khóa học, bài giảng và tiến độ học tập.',
            'Xây dựng RESTful APIs kết nối các hệ thống vệ tinh và ứng dụng di động.',
            'Nâng cấp, bảo trì mã nguồn cũ, tối ưu hóa các câu truy vấn MySQL nặng.'
          ]
        },
        mktAffiliate: {
          title: 'MKT Affiliate Hub',
          description: 'Nền tảng tiếp thị liên kết nội bộ doanh nghiệp giúp ghi nhận lượt nhấp chuột, tính toán hoa hồng nhiều cấp độ và xuất báo cáo sản lượng.',
          techDetails: [
            'Laravel xử lý toàn bộ logic nghiệp vụ tiếp thị.',
            'RabbitMQ xử lý hàng đợi sự kiện tracking clicks/conversions giúp giảm tải tức thời cho DB.',
            'Redis lưu trữ dữ liệu tracking tạm trước khi ghi xuống MySQL.'
          ],
          duties: [
            'Phát triển tính năng ghi nhận lượt chuyển đổi và tracking link.',
            'Lập trình API quản lý hoa hồng và xử lý rút tiền tự động.',
            'Tận dụng RabbitMQ cho các tác vụ nền và bắn thông báo thời gian thực.'
          ]
        },
        vshop: {
          title: 'VShop E-commerce',
          description: 'Sàn thương mại điện tử đa người bán (multi-vendor) hỗ trợ chủ cửa hàng quản lý sản phẩm, đơn hàng, kho vận và khuyến mãi tập trung.',
          techDetails: [
            'Hệ quản trị cơ sở dữ liệu MySQL thiết kế theo mô hình quan hệ đa liên kết.',
            'Redis lưu cache danh sách danh mục và trang chủ giúp tăng 200% tốc độ phản hồi.',
            'VueJS xây dựng trang giỏ hàng và thanh toán một trang duy nhất (One-page Checkout).'
          ],
          duties: [
            'Phát triển các module Sản phẩm, Danh mục, Giỏ hàng và Đơn hàng.',
            'Xây dựng các RESTful APIs chuẩn xác kết nối giao diện VueJS.',
            'Tối ưu hóa các truy vấn MySQL dạng join nhiều bảng và triển khai Redis cache.'
          ]
        }
      }
    },
    contact: {
      tagline: 'Kết nối với tôi',
      title: 'Liên hệ',
      subtitle: 'Hãy cùng thảo luận để xây dựng các giải pháp đột phá tiếp theo',
      ready: 'Sẵn sàng hợp tác',
      readyDesc: 'Tôi luôn cởi mở với các cơ hội việc làm mới, dự án freelance, hoặc đơn giản là cùng giao lưu trao đổi về công nghệ hệ thống & lập trình web. Đừng ngần ngại liên lạc với tôi!',
      sendEmail: 'Gửi thư điện tử',
      callPhone: 'Gọi điện thoại',
      location: 'Nơi làm việc',
      msgMe: 'Gửi tin nhắn cho tôi',
      formName: 'Họ và tên',
      formNamePlaceholder: 'Nhập họ và tên của bạn...',
      formEmail: 'Địa chỉ Email',
      formEmailPlaceholder: 'username@domain.com',
      formMsg: 'Nội dung tin nhắn',
      formMsgPlaceholder: 'Bạn muốn nhắn gì cho tôi...',
      formSubmit: 'Gửi tin nhắn',
      successTitle: 'Gửi tin nhắn thành công!',
      successDesc: 'Cảm ơn bạn đã liên hệ. Tôi đã nhận được tin nhắn và sẽ phản hồi lại bạn sớm nhất có thể qua Email.',
      successBtn: 'Gửi tin nhắn mới'
    },
    footer: {
      desc: 'Fullstack Developer chuyên nghiệp, kiến tạo các giải pháp web bền vững, hiệu năng cao và có thể mở rộng.',
      quickLinks: 'Liên kết nhanh',
      contactSocials: 'Liên hệ & Mạng xã hội',
      rights: 'Đã đăng ký toàn bộ quyền. Designed with'
    }
  },
  en: {
    brand: 'anhnv',
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV'
    },
    hero: {
      greeting: "👋 Hi, I'm",
      name: 'Nguyen Viet Anh',
      role: 'Fullstack Developer',
      description: 'Professional Fullstack Web Developer with 3 years of hands-on experience. Proficient in PHP (Laravel, Yii2), Node.js (NestJS), VueJS, and database management. Passionate about building sustainable, highly optimized, and high-performance e-learning and e-commerce platforms.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      expYears: 'Years of Experience',
      completedPrjs: 'Completed Projects',
      skillsMastered: 'Technologies Mastered',
      sysAvailability: 'System Availability'
    },
    about: {
      tagline: 'Personal Profile',
      title: 'About Me',
      subtitle: 'My educational journey and development philosophy',
      whoAmI: 'Who am I?',
      bioParagraph1: 'My name is <strong>Nguyen Viet Anh</strong>, a young and passionate Fullstack Developer living in Hanoi. My journey started at <strong>FPT Aptech</strong>, where I was formally trained in software engineering and algorithmic thinking.',
      bioParagraph2: 'Over 3 years of professional experience at technology companies, I have directly built and maintained core platforms like LMS (Learning Management Systems), E-commerce websites, and Affiliate Marketing networks. I focus not only on feature delivery, but also database query tuning, high-performance caching, and writing reusable code.',
      quote: 'Writing clean code, designing optimized architectures, and continuously enhancing user experiences are the driving forces of my work.',
      personalInfo: 'Contact Details',
      fullNameLabel: 'Name:',
      emailLabel: 'Email:',
      phoneLabel: 'Phone:',
      locationLabel: 'Location:',
      locationVal: 'Dong Da, Hanoi',
      education: 'Education',
      school: 'FPT Aptech',
      major: 'Major: Software Engineering',
      eduDesc: 'High-quality International Programmer Program, focusing on system programming, enterprise web application development, and databases.'
    },
    experience: {
      tagline: 'Career Path',
      title: 'Work Experience',
      subtitle: 'Key milestones and contributions at technology corporations',
      present: 'Present',
      unica: {
        company: 'Unica JSC',
        role: 'Fullstack Developer',
        desc: 'Designed, developed, and maintained e-learning (LMS), community, and affiliate marketing platforms serving tens of thousands of users.',
        duties: [
          'Developed backend APIs using Laravel/NestJS and optimized MySQL, MongoDB databases.',
          'Built and integrated payment gateways, online examination modules, and affiliate tracking.',
          'Optimized application performance using Redis caching and asynchronous message queues via RabbitMQ.',
          'Managed Linux servers, Nginx configurations, and Docker deployment environments.'
        ]
      },
      mkt: {
        company: 'MKT Solutions JSC',
        role: 'Fullstack Developer',
        desc: 'Participated in research, development, and optimization of multi-channel e-commerce platforms and affiliate marketing networks.',
        duties: [
          'Worked closely with Frontend and Business teams to translate product requirements into sleek UI/UX.',
          'Designed MySQL database schemas and programmed robust RESTful APIs for high-volume transactions.',
          'Integrated domestic and international payment gateways, and configured Redis caching for homepage data.',
          'Supported administration and deployment of web applications on Linux VPS servers.'
        ]
      }
    },
    skills: {
      tagline: 'Technical Expertise',
      title: 'Skills & Stack',
      subtitle: 'Technologies, databases, and tools I use to build scalable products'
    },
    projects: {
      tagline: 'Featured Works',
      title: 'Key Projects',
      subtitle: 'Applications and platforms I have participated in designing and programming',
      filterAll: 'All Projects',
      filterEdtech: 'EdTech / LMS',
      filterAffiliate: 'E-commerce & Affiliate',
      tabOverview: 'Overview',
      tabTech: 'Tech Stack',
      tabDuties: 'My Role',
      teamSizeLabel: 'Team Size:',
      teamSizeVal: 'members',
      webLabel: 'Website:',
      techHighlights: 'Technical Highlights:',
      visitWeb: 'Visit website',
      list: {
        affiliateUnica: {
          title: 'Affiliate Unica',
          description: 'Multi-tiered affiliate marketing platform for Unica (Network - Manager - Affiliate - Advertiser). Handles large-scale conversion tracking and automated commission settlements.',
          techDetails: [
            'Utilized NestJS to build high-performance RESTful APIs for data reporting.',
            'Developed admin dashboard screens and campaign configurations using VueJS.',
            'RabbitMQ handles asynchronous conversion queuing to prevent bottlenecking.',
            'Redis accelerates report query times and tracks user clicks.'
          ],
          duties: [
            'Developed campaign management modules and backend APIs.',
            'Built multi-party reconciliation and automated commission calculations.',
            'Optimized throughput of heavy report queries using Redis caching and queue processing.'
          ]
        },
        idQuiz: {
          title: 'ID QUIZ',
          description: 'High-quality online learning and examination platform for high school students, supporting national graduation test preparations.',
          techDetails: [
            'Clean Laravel architecture optimizes complex quiz structures.',
            'RabbitMQ and Redis handle high-volume parallel quiz grading and real-time score updates.',
            'Maintains progress logs to deliver tailored study recommendations.'
          ],
          duties: [
            'Designed and developed examination features, exam creator tools, and question banks.',
            'Optimized relational database tables logging student quiz sessions.',
            'Implemented RabbitMQ queuing to absorb sudden spikes during nationwide mock tests.'
          ]
        },
        edubitMe: {
          title: 'Edubit Me',
          description: 'Interactive gamified classroom platform helping teachers organize real-time educational quizzes integrated with NestJS backend.',
          techDetails: [
            'NestJS backend manages session sockets, game room states, and active users.',
            'WebSocket (Socket.io) ensures sub-second latency for live multiplayer quiz submissions.',
            'MongoDB stores unstructured question schemas and leaderboard logs.'
          ],
          duties: [
            'Developed game room management APIs using NestJS.',
            'Established real-time bi-directional synchronization via WebSocket.',
            'Programmed game rules, leaderboard calculations, and result persistent layers.'
          ]
        },
        unicaExpert: {
          title: 'Unica Expert',
          description: 'Learning community platform integrated with affiliate marketing, letting users create knowledge groups and monetize through course recommendations.',
          techDetails: [
            'NestJS backend, MongoDB database for posts, comments, and member profiles.',
            'Redis cache handles heavy social feeds to decrease MongoDB reads.',
            'VueJS forms a smooth single-page application (SPA).'
          ],
          duties: [
            'Developed social community features (posts, comments, replies, and reactions).',
            'Coded REST APIs for group-based affiliate product configurations.',
            'Configured Redis memory layers to accelerate community feed loading.'
          ]
        },
        edubit: {
          title: 'Edubit.vn',
          description: 'SaaS school-builder platform enabling instructors to sell courses under custom domains with automated payment links and video protection.',
          techDetails: [
            'Deeply integrated LMS learning workflow.',
            'MongoDB stores course indexes, student profiles, and progress structures.',
            'jQuery/Ajax support responsive user operations without full-page reloads.'
          ],
          duties: [
            'Programmed the online quiz module and instructor question banks.',
            'Developed student management APIs and synchronized billing status.',
            'Optimized browser performance for interactive learning player wrappers.'
          ]
        },
        unica: {
          title: 'Unica.vn',
          description: 'Leading online education portal in Vietnam serving hundreds of thousands of learners with course playback, tracking, and shopping checkout.',
          techDetails: [
            'Constructed on Yii2 MVC framework with robust built-in security features.',
            'MySQL stores relational tables for learning progress and invoices.',
            'Responsive HTML5 player ensures compatibility across all mobile browsers.'
          ],
          duties: [
            'Developed course libraries, lesson player modules, and student progression states.',
            'Coded RESTful APIs for web-backend communication and mobile clients.',
            'Maintained legacy code systems and refactored heavy MySQL queries.'
          ]
        },
        mktAffiliate: {
          title: 'MKT Affiliate Hub',
          description: 'Internal affiliate management portal for tracking marketing links, calculating multi-level commissions, and outputting metrics reports.',
          techDetails: [
            'Laravel controls affiliate campaign registrations and accounts.',
            'RabbitMQ handles conversion queues to maintain smooth database operations.',
            'Redis stores click counts temporarily to avoid writing directly to DB.'
          ],
          duties: [
            'Developed conversion tracking algorithms and dynamic redirect links.',
            'Created commission auditing modules and automated payouts.',
            'Utilized RabbitMQ queue handlers for background notification dispatches.'
          ]
        },
        vshop: {
          title: 'VShop E-commerce',
          description: 'Multi-vendor marketplace enabling store owners to manage product listings, invoices, promotions, and customers in a unified portal.',
          techDetails: [
            'MySQL designed with complex relational architectures.',
            'Redis caches static catalogs and home banners to increase loading speeds by 200%.',
            'VueJS builds a smooth checkout form in a Single Page application format.'
          ],
          duties: [
            'Programmed catalog, shopping cart, and order checkout flows.',
            'Constructed REST APIs connecting backend functions to VueJS client.',
            'Optimized heavy multi-table MySQL joins and integrated Redis caches.'
          ]
        }
      }
    },
    contact: {
      tagline: 'Get In Touch',
      title: 'Contact',
      subtitle: 'Let\'s collaborate on your next system-critical web application',
      ready: 'Ready to Collaborate',
      readyDesc: 'I am always open to new career opportunities, freelance jobs, or simply sharing web technology experiences. Do not hesitate to drop me a message!',
      sendEmail: 'Send an email',
      callPhone: 'Make a call',
      location: 'Office location',
      msgMe: 'Send Me A Message',
      formName: 'Full Name',
      formNamePlaceholder: 'Enter your full name...',
      formEmail: 'Email Address',
      formEmailPlaceholder: 'username@domain.com',
      formMsg: 'Message Content',
      formMsgPlaceholder: 'Type your message here...',
      formSubmit: 'Send Message',
      successTitle: 'Sent Successfully!',
      successDesc: 'Thank you for reaching out! I have received your message and will respond to your email as soon as possible.',
      successBtn: 'Send New Message'
    },
    footer: {
      desc: 'Professional Fullstack Developer building sustainable, high-performance, and scalable web solutions.',
      quickLinks: 'Quick Links',
      contactSocials: 'Connect With Me',
      rights: 'All rights reserved. Designed with'
    }
  }
};

// Computed helper to fetch translation value
export const t = (path) => {
  const keys = path.split('.');
  let obj = translations[currentLocale.value];
  
  for (const key of keys) {
    if (obj && obj[key] !== undefined) {
      obj = obj[key];
    } else {
      // Fallback to vi if not found in en
      let fallbackObj = translations['vi'];
      for (const fallbackKey of keys) {
        if (fallbackObj && fallbackObj[fallbackKey] !== undefined) {
          fallbackObj = fallbackObj[fallbackKey];
        } else {
          return path; // Return path string if translation completely missing
        }
      }
      return fallbackObj;
    }
  }
  return obj;
};

export const useI18n = () => {
  const locale = computed(() => currentLocale.value);
  
  const toggleLocale = () => {
    currentLocale.value = currentLocale.value === 'vi' ? 'en' : 'vi';
    localStorage.setItem('locale', currentLocale.value);
  };
  
  return {
    locale,
    toggleLocale,
    t
  };
};
