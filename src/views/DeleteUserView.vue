<template>
    <div>
        유저삭제
        <button @click="deleteUser">삭제</button>
    </div>
</template>

<script>
    export default {

        data : () =>({
            token : ''
        }),

        methods : {
            async deleteUser() {
                if(!confirm('정말로 삭제 하시겠습니까?')){
                    return false;
                }

                const response = await this.$api('https://api.devcury.kr/api/auth/user', 'DELETE');

                if(response.status === 200){
                    alert('회원 삭제되었습니다');
                }

            }
        }   

    }
</script>

<style scoped>

</style>