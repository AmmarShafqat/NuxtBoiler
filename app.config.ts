export default defineAppConfig({
  ui: {
    container: {
      base: 'max-w-[1380px] mx-auto'
    },
    progress:{
        slots:{
           base: 'bg-[black]'
        },
        variants:{
            color:{
                primary: {
                    indicator: 'bg-[aqua]',
                    steps: 'text-[blue]'
                },
            }
        }
    }
  }
})

