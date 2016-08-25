// Template
  // {
  //   "title": "",
  //   "liveLink": "",
  //   "githubLink": "",
  //   "image": "",
  //   "features": [
  //   ],
  //   "techStack": ""
  // }


const projectsCollection = [
  {
    "title": "Athena | Web Annotation",
    "liveLink": "https://athena-annotate.herokuapp.com/#",
    "githubLink": "https://github.com/AthenaAnnotate/AthenaAnnotate",
    "image": "./src/assets/athena-ui.png",
    "features": [
      "Annotation Engine that traverses and manipulates the DOM (javascript)",
      "In-browser UI components (React, Redux)",
      "GET and POST Annotations from / to Server (AJAX)",
      "Unit Tests for Annotation Engine Components (Mocha + Chai)",
    ],
    "techStack": "React, Redux, Javascript, HTML5, CSS3 / React, Node / Express, PostgreSQL",
  },
  {
    "title": "Global News | News Aggregator",
    "liveLink": "http://52.41.240.48/",
    "githubLink": "https://github.com/SerendipitousTypo/news",
    "image": "./src/assets/news-home.png",
    "features": [
      "Responsive UI (React, Redux)",
      "GET articles from server (AJAX)",
      "Elasticsearch",
    ],
    "techStack": "React, Redux, Javascript, HTML5, CSS3",
  },
  {
    "title": "Google Maps - Places API",
    "liveLink": "",
    "githubLink": "https://github.com/JonasMS/googlePlacesAPI",
    "image": "./src/assets/maps.png",
    "features": [
      "Search for places (Google Maps API)",
      "Click on marker to focus on place",
      "Click on list item to focus on place",
    ],
    "techStack": "React, Javascript, HTML5, CSS3 / SASS"
  },
  {
    "title": "Roam | Geolocation-based Networking",
    "liveLink": "",
    "githubLink": "https://github.com/SerendipitousTypo/roam",
    "image": "./src/assets/roam-display.png",
    "features": [
      "RESTful API (Node, Express)",
      "Handles Relational Data (Neo4j)",
    ],
    "techStack": "Node, Express, Neo4j"
  },
];

export default projectsCollection;
