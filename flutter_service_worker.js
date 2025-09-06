'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d9e4c1260c9648972063a33d415dfc56",
".git/config": "847df65eb254ac61587042a7c941d2dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "67610adfb9e805f2b218a517cb5d68aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77e8bd702f3bd251c4308cbc0db67af5",
".git/logs/refs/heads/master": "77e8bd702f3bd251c4308cbc0db67af5",
".git/logs/refs/remotes/origin/master": "36078a723881712c02cd19ca7e538364",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0c/b675264342c307972d32e7eac27fb5b6e66238": "6c01522d80044ba1a294741248ff64cb",
".git/objects/16/100ef543106355605e8699ecd8775e3279970e": "b3c020491fdbd5f3947f711e239b09c3",
".git/objects/1a/7939fe064a63b4acf477538b979b55bc7449ec": "0a1db253a770860106f6f0edd50c7c57",
".git/objects/1d/5958f543dfc5eba5c058ca78534ef09f11b412": "27776c25c573dde1e47640bf18ee5f99",
".git/objects/1d/ce3843a32ef0099e94f60edac0b5cfe00aba0f": "9fd998d8e852db423d05211c14a4fd71",
".git/objects/26/e2094fc10cebe138f0c27a5431afba87017528": "ef1d0d10aaf73abd6fc14b72efedb2ee",
".git/objects/28/d829873cd401de957fa5a8846df190eba5e1df": "7ba701ce75fafdad9a4b3dd01b7e43ae",
".git/objects/2c/9df854ce2390eb7fac7e7f5e8dfbb7abfd1b33": "8093119c9f80bfcfb6d002b341570115",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/f1c29a4fb300ef31a562b189de41b0c91a229f": "fc95b4fe009f16742d4608390ffe34bc",
".git/objects/39/31602d46f289d22259ab8f65f47ede07992e94": "71be8824144a6f257c700c33425c10a3",
".git/objects/3a/a408065faa0924823676d4add3f5c68f838c34": "3b36ac91aba7444ab74e28425f782523",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/9a8d7e2f31e467f97d06fa7b5d44278c327a88": "319be5aebb523fff587a19cf66d2622b",
".git/objects/43/f1310af4305890ba245ea807933927276eadfc": "e96ed44f6a8c9b7e45b26cc252b2542e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/54aeb464166ec53375e0b98b101b4390a695ae": "799d75761c21b8cf80f904b54017dab9",
".git/objects/5e/62008da55011e5cb3f33b17cd5d005af79b538": "101f23883548931c9a80f1b05961a1e3",
".git/objects/5f/8a4e0e1225a110dff28f7a3d9ecce2a24ef8a5": "fd40ec6946b8dcf0356d2e104a15dbfb",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/a221cfd9229a5853a5ac427eb9b8fc790cf662": "fab1e8dd6350641a52227d146fff1da8",
".git/objects/6b/266a5684676defd512b9e9e4ca8ee53e56b0f8": "f3d5020cbf2970fad45f0b3eb543c534",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/b7d6b0f15aaf446dae00410614894dbacaea64": "4d425f0aaaa0d72731f693ed7f7801bc",
".git/objects/75/2b0f2b3156dde4e1b3afe8ede0f48c37ff82a5": "708d6323ff7f983df85e478efe533c7a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/91/238de58f839e139bc5c9adf46cee92b6d91503": "ec08fca183c324896d056143bd09b025",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/245a83e6c1dfc611155e5886209e91890ee67e": "867148d2106bb7219b3f0511602f8c49",
".git/objects/9a/28894b39016ab5f44f99f86bb3e15e91558de6": "60a2cb6252edca6c6ac67122a43b562d",
".git/objects/9f/ddc15785dcd8d83d5062cf48ae5231e777c3a0": "5e429789591b012176979ca20ddb8dd6",
".git/objects/a0/6241266c46b7d018bd17edc1e329e98e14fdcc": "dda5cd6052d08d1e1680c1509ae7d9d8",
".git/objects/a2/4dbc3e409380d7f8c3092e8f54a1a8f75e594c": "3bd1a4442a520b6c4efa60de8e6c3b4c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b1/3e2c1e3b17006413e865db603ed0fd0e489435": "26c574981b4f8edbddd96876e4ff4897",
".git/objects/bd/30e90b7acfe9c1c50e0e31cd93d0ec470f5011": "af82ec6e0946515b9940fd5cc920cbac",
".git/objects/c0/1606626e983e5d63de9ef13734e2dcf94d8925": "6fcd5bd1d78dd7c37378ddc3afb82577",
".git/objects/ca/cb6a50bc9cccc0b8682d34da5abfe2c6e61d91": "3020915fc14b93019d0f28c2cbbc9813",
".git/objects/d0/906cd4cec76b8b66a6cf3a8c72530ea27ff5fd": "c6eb501ca26e272947443589a87e74ab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7cbb8058d4e819bbac75dc73d5f5323186cf23": "47176aae91be57f21e54d14635250adf",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/fc23f76849fb5f3e6977898addcfd9d064482d": "97046d2225bca35e7c324c7ac8e271e1",
".git/objects/e3/d2fa0fe09f22fd496fe40efa10f2d5096c947d": "c8860cbd05f4b12d825250f0c8babecc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/5bd6396d88b44736b82f3884eaac3a6e7a2759": "868d924f5ff564bc76f14e1903ee8c1d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/1be13a38db008f908214aa91f8d6d1eabdc48e": "dcaa1586613eab8acf87d1c7d2f6d735",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/7791561b8e000540dddd0384e304dbf1a1dad8": "723eb41bc378ecd6f33c91dd86fd3faf",
".git/refs/heads/master": "0db186ec989a25d09e4c78799616f4fa",
".git/refs/remotes/origin/master": "0db186ec989a25d09e4c78799616f4fa",
"assets/AssetManifest.bin": "c006b9e51740c5e497121584902f430b",
"assets/AssetManifest.bin.json": "af5e2795de476bd2d7e729a6b320cbdf",
"assets/AssetManifest.json": "94fb55b62f410899fb16906c6551ee1d",
"assets/assets/animations/Abstract%2520Blocks%2520moving%2520in%2520metrics.json": "bc21040894b009e9d6e067695a0b62f8",
"assets/assets/profile.jpg": "fa2b0f8be76f9c8cd462ca01c09c630d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d3bc3dd3da91223be2ac14caa8c460e8",
"assets/NOTICES": "61f6d544e51d292bab6c32e6a7ca39e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "8e9ea69744d46a526b37d6c1da7e13f8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3eed63789c878de8bf0941d464d154ae",
"icons/icon-192.png": "8e9ea69744d46a526b37d6c1da7e13f8",
"icons/icon-512.png": "8e9ea69744d46a526b37d6c1da7e13f8",
"icons/icon-maskable-192.png": "8e9ea69744d46a526b37d6c1da7e13f8",
"icons/icon-maskable-512.png": "8e9ea69744d46a526b37d6c1da7e13f8",
"index.html": "1e64a026ad35467d06e8cd8a8c1a7bef",
"/": "1e64a026ad35467d06e8cd8a8c1a7bef",
"main.dart.js": "477b3c9df9d0f6d0de4b7046788edc8f",
"manifest.json": "dfa7c01202623623f35936616805217a",
"version.json": "0d858aa776fda1552551241241a28629"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
