FROM node:9.6.1
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable
RUN mkdir /usr/src
WORKDIR /usr/src
ENV PATH /usr/src/blog/node_modules/.bin:$PATH
RUN npm install -g @angular/cli@1.6.8 --unsafe



#COPY package.json /usr/src/app/package.json
#RUN npm install


#COPY . /usr/src/app

#CMD ng serve --host 0.0.0.0
