FROM gaiaadm/result-processing:latest

# set Node to production
ARG NODE=production
ENV NODE_ENV ${NODE}

# Create app directory
RUN mkdir -p /src/processors/alm-run-processor
WORKDIR /src/processors/alm-run-processor

# install required modules
COPY package.json /tmp/package.json
RUN cd /tmp && npm install && mv /tmp/node_modules /src/processors/alm-run-processor && rm -rf /tmp/*

# Bundle app source
COPY . /src/processors/alm-run-processor
