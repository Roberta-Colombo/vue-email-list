const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        callApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                this.email = res.data.response;
                this.emails.push(this.email);
                console.log(this.emails);
            })
        }
    },
    created() {
        for(let i = 0; i < 10; i++){
            this.callApi();
        }
    }
}).mount('#app')