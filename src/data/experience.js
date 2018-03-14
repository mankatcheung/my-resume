const experiences = {
  companies: [
    {
      name: 'PremiumSoft CyberTech Limited',
      url: 'https://www.navicat.com/en/company/aboutus',
      jobTitle: 'Senior Software Developer',
      begin: 'Apr 2014',
      end: 'Aug 2017',
      projects: [
        {
          name: 'Instagrab',
          begin: 'Apr 2014',
          end: 'Mar 2016',
          comments: [
            "A third-party app provided better user experience for Instagram by using Instagram official API.",
            "The winner of the Webby Award (Mobile Sites & Web Best Use of Mobile Camera) in 2015 (https://www.webbyawards.com/winners/2015/mobile-sites-apps/features-categories/best-use-ofmobile-camera/instagrab-your-instagram-companion/)",
            "Backup function for Instagram posts by using Google Drive and iCloud API.",
            "A steady income was made by adding Google Admob.",
            "More than 200K daily active users.",
            "Permanently shutted down due to Instagram policy changed."
          ],
          stacks: [
            'iOS Development (Objective C)',
            'Android Development (Java)',
            'Instagram API',
            'Google Drive API',
            'iCloud API',
            'Dropbox API'
          ]
        },
        {
          name: 'Grab for Instagram',
          begin: 'Mar 2016',
          end: 'Apr 2016',
          comments: [
            "A modified version of previous project 'Instagrab'.",
            "More than 50K daily active users."
          ],
          stacks: [
            'iOS Development (Objective C)',
            'Android Development (Java)',
            'Android Studio',
            'VIPER Architecture',
            'Google Drive API',
            'iCloud API',
            'Dropbox API'
          ],
          links: {
            android: "https://play.google.com/store/apps/details?id=com.grandsoft.instagrab&hl=en",
            ios: "https://itunes.apple.com/us/app/grab-for-ig/id546639267?mt=8"
          }
        },
        {
          name: 'Mavie',
          begin: 'Mar 2016',
          end: 'Sep 2016',
          comments: [
            "A social network app which is similar to Instagram for the Mainland market.",
            "The whole development team was relocated to Shanghai for 6 months."
          ],
          stacks: [
            'iOS Development (Swift)',
            'Flux Architecture',
            'Node.js',
            'Golang',
            'Docker',
            'Microservices Architecture',
            'Aliyun',
            'PostgreSQL'
          ],
          links: {
            ios: "https://itunes.apple.com/cn/app/%E5%90%8C%E4%BA%AB-%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB/id1215979862?mt=8"
          }
        },
        {
          name: 'Navicat Monitor',
          begin: 'Sep 2016',
          end: 'Aug 2017',
          comments: [
            "A database monitoring tool for optimizing the performance of database.",
            "The beta version was released recently."
          ],
          stacks: [
            'Ruby on Rails',
            'Vue.js',
            'Flux Architecture',
            'MySQL'
          ],
          links: {
            url: 'https://www.navicat.com/en/products/navicat-monitor'
          }
        }
      ]
    }
  ]
};

export default experiences;