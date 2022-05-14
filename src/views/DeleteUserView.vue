<template>
    <div>
        유저삭제
        <button @click="deleteUser">삭제</button>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import axios from "axios"

    export default {
        data : () =>({}),

        methods : {
            deleteUser() {
                if(!confirm('정말로 삭제 하시겠습니까?')){
                    return false;
                }

                axios.delete('https://api.devcury.kr/api/auth/user', {
                    headers : {
                        Authorization: `Bearer ${this.token}`
                    }
                }).then(response => {
                    if(response.status === 200){
                        alert('삭제되었습니다.');
                    }
                }).catch(error=> {
                    alert(error.response.data.error);
                });
            }
        },
        
        computed : {
            ...mapGetters(['token'])
        }

    }
</script>

<style scoped>

</style>