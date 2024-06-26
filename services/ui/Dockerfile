FROM node:18.20.0-alpine3.19 as build
LABEL maintainer="Ava Thorn" email="avatheavian@gmail.com"
ARG DEVELOPMENT
ENV DEVELOPMENT=${DEVELOPMENT}

###########################
# BASE CONTAINER COMMANDS #
###########################

WORKDIR /qutex

RUN npm update -g npm
COPY package.json package.json

################
# INSTALLATION #
################

RUN npm install

#####################
# APPLICATION FILES #
#####################

COPY src src
COPY public public
COPY jsconfig.json jsconfig.json

###########################
# BUILD (NON-DEVELOPMENT) #
###########################

COPY install.sh /install.sh
RUN /install.sh && rm -f /install.sh

#########
# CLEAN #
#########

# These should be volume mounted for development
RUN rm -rf src public

# package.json is needed for running in development mode
RUN if [ "${DEVELOPMENT}" != "true" ]; then rm -rf package-lock.json package.json jsconfig.json; fi;

# For non-development, build folder will be left with static files

##############
# ENTRYPOINT #
##############


# Squash
# FROM scratch
# WORKDIR /qutex
# COPY --from=build . .
# COPY --from=build /usr/local/lib/node_modules /usr/local/lib/node_modules

COPY docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
HEALTHCHECK --interval=30s --start-period=5s --timeout=10s --retries=3 CMD wget --spider http://localhost:3000/ 2>/dev/null