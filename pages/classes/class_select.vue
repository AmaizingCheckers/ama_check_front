<template lang="pug">
div
  div 授業科目を選択してください
  select(name='subject')
    option(value='a') aaa
    option(value='b') bbb
    option(value='c') ccc

  div クラスを選択してください
  select(name='class')
    option(value='a') aaa
    option(value='b') bbb
    option(value='c') ccc  

</template>


<script>

export default {
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>

</style>
