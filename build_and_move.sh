#! /bin/bash
npm run build && cp dist/index.html ../digistories-naoqi/app/html && rm -r ../digistories-naoqi/app/html/static/* && cp -r dist/static ../digistories-naoqi/app/html
