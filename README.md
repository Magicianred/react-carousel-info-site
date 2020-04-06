# react-carousel-info-site  

This is a simple webapp realized with [react-simple-app](https://github.com/Magicianred/react-simple-app). It is build in **React**, **HTML** and **Bootstrap** for CSS rules.  
  
It is not necessary to have a database (like SQLServer or MySQL) in order to have a site with dynamic content.  
  
You can change the content by editing the json files and the markdown of the 'public/data' folder. *react-carousel-info-site* display them.  

  
As an example, you can show, the [Demo App](http://magicianred.altervista.org/gigs/react-carousel-info-site/).  
  
## Configuration  
  
### .env  
- set data in env file  
```plain/text
REACT_APP_NAME=react-carousel-info-site
REACT_APP_VERSION=1.0.1
REACT_APP_BASE_PATH=/gigs/react-carousel-info-site
```
  
### package.json (for build)  
- set path from root of your web hosting  
```json
  "homepage": "/gigs/react-carousel-info-site",
```
  
### /public/data  
- /public/data/pages/home.md  
- /public/data/pages/about.md  
- /public/data/pages/whereare.md  
- /public/data/pages/whoare.md  
  
- /public/data/home_messages.json  
- /public/data/people.json  
- /public/data/places.json  

### customize bootstrap  
- /src/custom.scss  
```scss
/* make the customizations */
// $theme-colors: (
//     "info": tomato,
//     "danger": teal
// );
```

