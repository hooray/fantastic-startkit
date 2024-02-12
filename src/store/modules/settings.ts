const useSettingsStore = defineStore(
  // 唯一ID
  'settings',
  () => {
    const title = ref('')

    // 设置网页标题
    function setTitle(val: string) {
      title.value = val
    }

    return {
      title,
      setTitle,
    }
  },
)

export default useSettingsStore
