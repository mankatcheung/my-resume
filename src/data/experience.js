const experiences = {
  companies: [
    {
      name: 'PremiumSoft CyberTech Limited',
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
            "Native iOS (Obj. C) and Android Development",
            "Permanently down due to Instagram policy changed"
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
          links: {
            ios: "https://play.google.com/store/apps/details?id=com.grandsoft.instagrab&hl=en",
            android: "https://itunes.apple.com/us/app/grab-for-ig/id546639267?mt=8"
          }
        },
        {
          name: 'Mavie',
          begin: 'Mar 2016',
          end: 'Sep 2016',
          comments: [
            "A social network app which is similar to Instagram for the Mainland market",
            "Client side: Native iOS, Swift, Flux architecture, ReSwift",
            "Server side: Golang, microservices architecture, Docker",
            "Hosting: Aliyun",
            "Database: PostgreSQL"
          ],
          links: {
            ios: "https://itunes.apple.com/cn/app/%E5%90%8C%E4%BA%AB-%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB/id1215979862?mt=8"
          }
        },
        {
          name: 'Server Monitor',
          begin: 'Sep 2016',
          end: 'Aug 2017',
          comments: [
            "A database monitoring tool for optimizing the performance of database",
            "Client side: Vue.js, Vuex, Vue-router, webpack",
            "Server side: Ruby on Rails",
            "Database: MySQL"
          ]
        }
      ]
    }
  ]
};

export default experiences;