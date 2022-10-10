<template>
  <main>
    <Header />
    <div flex="~" class="w-[1200px] mx-auto mt-4">
      <div class="w-48">
        <nav bg="white" class="shadow-sm p-2" border="rounded-[4px]" hover="">
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-update-now class="inline-block mr-2" />最新
          </div>
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-fire class="inline-block mr-2" />热门
          </div>
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-user-favorite class="inline-block mr-2" />关注
          </div>
        </nav>
        <div bg="white" class="shadow-sm mt-4" border="rounded-[4px]">
          <h2 text="~ 16px" font="semibold" class="pt-5 px-4 pb-2">
            话题
          </h2>
          <ul>
            <li>你相信光吗？</li>
          </ul>
        </div>
      </div>
      <div flex-grow mx-4>
        <slot />
      </div>
      <div class="w-70" bg="gray-200">
        <div class="">
          111
        </div>
      </div>
    </div>
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div>
  </main>
</template>
