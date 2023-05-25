version=`node -v`
if  [[ $version == v18.* ]] ;
then
  export NODE_OPTIONS=--openssl-legacy-provider
fi
