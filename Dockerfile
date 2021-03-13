FROM centos

#set geo loction
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


# node js
RUN dnf install -y curl
RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -
RUN dnf install -y nodejs

# RUN dnf install -y gcc-c++ make python2

# deploy tools
# RUN dnf install -y mc git zip mysql wget

WORKDIR /usr/src/api