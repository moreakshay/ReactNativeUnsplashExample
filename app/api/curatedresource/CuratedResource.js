var api ={
    getCurated(page=1){
        let url=`https://api.unsplash.com/photos/curated?page=${page}`;
        let headers={
            method:'GET',
            headers:{
                Authorization: 'Client-ID 54f0e1fa426e72ebba349aaf676667faf8aef7f9d7d060503836d5e2f5ba7d15',
            },
        };
        return fetch(url, headers)
            .then((res)=>res.json());
    }
};
module.exports = api;