// docs/.vuepress/config.js
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import pkg from "@vuepress/plugin-register-components";
var __vite_injected_original_dirname = "D:/Projects/web/gdm-website/docs/.vuepress";
var { registerComponentsPlugin } = pkg;
var config_default = defineUserConfig({
  bundler: viteBundler(),
  base: "/gdm-website/",
  lang: "ja",
  title: "Game Development Meetup in VRChat",
  description: "\u30B2\u30FC\u30E0\u958B\u767C\u96C6\u6703\u3078\u3088\u3046\u3053\u305D\uFF01",
  locales: {
    "/ja/": {
      lang: "ja-JP",
      title: "VRC\u30B2\u30FC\u30E0\u958B\u767A\u96C6\u4F1A",
      description: "\u30B2\u30FC\u30E0\u958B\u767A\u96C6\u4F1A\u3078\u3088\u3046\u3053\u305D\uFF01"
    },
    "/": {
      lang: "en-US",
      title: "Game Development Meetup in Metaverse",
      description: "Welcome to our game development meetup!"
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "VRC\u6E38\u620F\u5F00\u53D1\u805A\u4F1A",
      description: "\u6B22\u8FCE\u6765\u5230\u6211\u4EEC\u7684\u6E38\u620F\u5F00\u53D1\u805A\u4F1A\uFF01"
    }
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: [
          { text: "Home", link: "/" }
          // { text: 'About', link: '/en/about/' },
          // Add more navigation items here
        ]
      },
      "/zh-CN/": {
        selectLanguageName: "\u7B80\u4F53\u4E2D\u6587",
        navbar: [
          { text: "Home", link: "/zh-CN/" }
          //   { text: 'About', link: '/zh-CN/about/' },
          // Add more navigation items here
        ]
      },
      "/ja/": {
        selectLanguageName: "\u65E5\u672C\u8A9E",
        navbar: [
          { text: "Home", link: "/ja/" }
          //   { text: 'About', link: '/about/' },
          // Add more navigation items here
        ]
      }
    }
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__vite_injected_original_dirname, "./components")
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovUHJvamVjdHMvd2ViL2dkbS13ZWJzaXRlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx3ZWJcXFxcZ2RtLXdlYnNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy93ZWIvZ2RtLXdlYnNpdGUvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xyXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcclxuaW1wb3J0IHsgcGF0aCB9IGZyb20gJ0B2dWVwcmVzcy91dGlscydcclxuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xyXG5pbXBvcnQgcGtnIGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcmVnaXN0ZXItY29tcG9uZW50cyc7XHJcbmNvbnN0IHsgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luIH0gPSBwa2c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICAgIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXHJcbiAgICBiYXNlOiAnL2dkbS13ZWJzaXRlLycsXHJcbiAgICBsYW5nOiAnamEnLFxyXG4gICAgdGl0bGU6ICdHYW1lIERldmVsb3BtZW50IE1lZXR1cCBpbiBWUkNoYXQnLFxyXG4gICAgZGVzY3JpcHRpb246ICdcdTMwQjJcdTMwRkNcdTMwRTBcdTk1OEJcdTc2N0NcdTk2QzZcdTY3MDNcdTMwNzhcdTMwODhcdTMwNDZcdTMwNTNcdTMwNURcdUZGMDEnLFxyXG4gICAgbG9jYWxlczoge1xyXG4gICAgICAgICcvamEvJzoge1xyXG4gICAgICAgICAgICBsYW5nOiAnamEtSlAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZSQ1x1MzBCMlx1MzBGQ1x1MzBFMFx1OTU4Qlx1NzY3QVx1OTZDNlx1NEYxQScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnXHUzMEIyXHUzMEZDXHUzMEUwXHU5NThCXHU3NjdBXHU5NkM2XHU0RjFBXHUzMDc4XHUzMDg4XHUzMDQ2XHUzMDUzXHUzMDVEXHVGRjAxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvJzoge1xyXG4gICAgICAgICAgICBsYW5nOiAnZW4tVVMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0dhbWUgRGV2ZWxvcG1lbnQgTWVldHVwIGluIE1ldGF2ZXJzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byBvdXIgZ2FtZSBkZXZlbG9wbWVudCBtZWV0dXAhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcvemgtQ04vJzoge1xyXG4gICAgICAgICAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZSQ1x1NkUzOFx1NjIwRlx1NUYwMFx1NTNEMVx1ODA1QVx1NEYxQScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnXHU2QjIyXHU4RkNFXHU2NzY1XHU1MjMwXHU2MjExXHU0RUVDXHU3Njg0XHU2RTM4XHU2MjBGXHU1RjAwXHU1M0QxXHU4MDVBXHU0RjFBXHVGRjAxJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xyXG4gICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgICAgJy8nOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RMYW5ndWFnZU5hbWU6ICdFbmdsaXNoJyxcclxuICAgICAgICAgICAgICAgIG5hdmJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7IHRleHQ6ICdBYm91dCcsIGxpbms6ICcvZW4vYWJvdXQvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBtb3JlIG5hdmlnYXRpb24gaXRlbXMgaGVyZVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJy96aC1DTi8nOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RMYW5ndWFnZU5hbWU6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxyXG4gICAgICAgICAgICAgICAgbmF2YmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvemgtQ04vJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQWJvdXQnLCBsaW5rOiAnL3poLUNOL2Fib3V0LycgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbW9yZSBuYXZpZ2F0aW9uIGl0ZW1zIGhlcmVcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcvamEvJzoge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TGFuZ3VhZ2VOYW1lOiAnXHU2NUU1XHU2NzJDXHU4QTlFJyxcclxuICAgICAgICAgICAgICAgIG5hdmJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnL2phLycgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHsgdGV4dDogJ0Fib3V0JywgbGluazogJy9hYm91dC8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG1vcmUgbmF2aWdhdGlvbiBpdGVtcyBoZXJlXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xyXG4gICAgICAgICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzJyksXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsd0JBQXdCO0FBQzlVLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsWUFBWTtBQUNyQixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxFQUFFLHlCQUF5QixJQUFJO0FBRXJDLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDNUIsU0FBUyxZQUFZO0FBQUEsRUFDckIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDRCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDakI7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNqQjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU8sYUFBYTtBQUFBLElBQ2hCLFNBQVM7QUFBQSxNQUNMLEtBQUs7QUFBQSxRQUNELG9CQUFvQjtBQUFBLFFBQ3BCLFFBQVE7QUFBQSxVQUNKLEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBO0FBQUE7QUFBQSxRQUc5QjtBQUFBLE1BQ0o7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNQLG9CQUFvQjtBQUFBLFFBQ3BCLFFBQVE7QUFBQSxVQUNKLEVBQUUsTUFBTSxRQUFRLE1BQU0sVUFBVTtBQUFBO0FBQUE7QUFBQSxRQUdwQztBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLG9CQUFvQjtBQUFBLFFBQ3BCLFFBQVE7QUFBQSxVQUNKLEVBQUUsTUFBTSxRQUFRLE1BQU0sT0FBTztBQUFBO0FBQUE7QUFBQSxRQUdqQztBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSixDQUFDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDTCx5QkFBeUI7QUFBQSxNQUNyQixlQUFlLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDekQsQ0FBQztBQUFBLEVBQ0w7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
