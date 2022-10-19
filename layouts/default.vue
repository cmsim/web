<template>
  <main>
    <Header />
    <div flex="~" class="w-[1200px] mx-auto mt-20">
      <div class="w-48">
        <nav bg="white" class="shadow-sm p-2 w-48" border="rounded-[4px]" pos="fixed">
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-update-now class="inline-block mr-2" />最新
          </div>
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-fire class="inline-block mr-2" />热门
          </div>
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-user-favorite class="inline-block mr-2" />关注
          </div>
          <div class="px-4 h-10 flex items-center rounded-sm cursor-pointer" hover="bg-blue-100 text-blue-700">
            <i i-carbon-hashtag class="inline-block mr-2" />话题
          </div>
          <ul px-4 mt-1>
            <li mb-2 flex="~" items-center>
              <i i-carbon-dot-mark class="inline-block mr-1 w-3 h-3 text-blue-500" /><a>你相信光吗？</a>
            </li>
            <li mb-2 flex="~" items-center>
              <i i-carbon-dot-mark class="inline-block mr-1 w-3 h-3 text-blue-500" /><a>你相信光吗？</a>
            </li>
            <li mb-2 flex="~" items-center>
              <i i-carbon-dot-mark class="inline-block mr-1 w-3 h-3 text-blue-500" /><a>你相信光吗？</a>
            </li>
            <li mb-2 flex="~" items-center>
              <i i-carbon-dot-mark class="inline-block mr-1 w-3 h-3 text-blue-500" /><a>你相信光吗？</a>
            </li>
          </ul>
        </nav>
      </div>
      <div flex-grow mx-4>
        <slot />
      </div>
      <div class="w-70">
        <div pos="fixed" bg="white" class="w-70">
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
