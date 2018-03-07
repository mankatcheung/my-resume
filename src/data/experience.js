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
            "A third-party app provided better user experience for Instagram by using Instagram official API",
            "Backup function for Instagram posts by using Google Drive and iCloud API",
            "More than 200K daily active users",
            "Permanently down due to Instagram policy changed"
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
            "An app for storing Instagram posts and uploading the posts to Google Drive/iCloud and Dropbox",
            "More than 10K daily active users"
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
            "A social network app which is similar to Instagram for the Mainland market"
          ],
          stacks: [
            'iOS Development (Swift)',
            'Flux Architecture',
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
            "A database monitoring tool for optimizing the performance of database"
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