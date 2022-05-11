<template>
    <div>
        유저 조회
        <p>아이디 : {{user.id}}</p>
        <p>이름 : {{user.name}}</p>
    </div>
</template>

<script>
    export default {

        data : () => ({
            user : {
                id  : '',
                name : ''
            }
        }),

        created(){
            this.callData();
        },

        methods : {
            async callData() {
                const response = await this.$api('https://api.devcury.kr/api/auth/user', 'GET');
                if(response.status === 200){
                    console.log(response);
                   this.user.id = response.data.id;
                   this.user.name = response.data.name;
                }
            }
        }
    }
</script>

<style scoped>

</style>