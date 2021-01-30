//// Global Variables
const mUopenAndClose = document.querySelector(".mUopenAndClose");
const mUContainer = document.querySelector(".mUContainer");
const mUmenuList = document.querySelector(".mUmenuList");
const mUmenuListDummy = document.querySelector(".mUmenuListDummy");
const playListMusic = document.querySelector(".playListMusic");
const musicSearchBox_input = document.querySelector(".mUsearchBox input");
const musicSearchBox_Img = document.querySelector(".mUsearchBox img");
const mUmenuListBtn = document.querySelector(".mUmenuListBtn");
const ytResultContainer = document.querySelector(".ytResultContainer");
const ytThumnail = document.querySelector(".ytThumnail");
const ytAccessBtnAdd = document.querySelector(".ytAccessBtnAdd");
const ytVideoPlayer = document.querySelector(".ytVideoPlayer");
const ytVideoPlayer_iframe = document.querySelector(".ytVideoPlayer iframe");



// Music Player Sizing
function resizingYoutube() {
    if (window.innerWidth > window.innerHeight) {
      ytVideoPlayer.style.height = window.innerHeight * 0.38 + "px";
      ytVideoPlayer.style.width = ytVideoPlayer.offsetHeight + "px";
    } else {
      ytVideoPlayer.style.width = window.innerWidth * 0.38 + "px";
      ytVideoPlayer.style.height = ytVideoPlayer.offsetWidth + "px";
    }

    if(ytVideoPlayer.offsetWidth > 200){ // 300px 제한
      ytVideoPlayer.style.width = 200 + "px";
      ytVideoPlayer.style.height = 200 + "px";
    }
    ytVideoPlayer_iframe.style.height = ytVideoPlayer.offsetWidth + "px";
    ytVideoPlayer_iframe.style.width = ytVideoPlayer.offsetHeight * (1 / 0.5625) + "px"
    const centerDistance = (ytVideoPlayer_iframe.offsetWidth - ytVideoPlayer_iframe.offsetHeight) / 2
    ytVideoPlayer_iframe.style.transform = `translateX(-${centerDistance}px)`;
    // console.log(ytVideoPlayer_iframe.offsetWidth, ytVideoPlayer_iframe.offsetHeight);
}

// to Get Youtube ID
function getYoutubeId(){
  const linkRegEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const result = musicSearchBox_input.value.match(linkRegEx);
  if (result){
    return result[7];
  } else{
    return null;
  }
}

// to create .ytResult tag and put on bottom of the .ytResultContainer
function createYtResult(i, id, title, author) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("ytResult");
  newDiv.innerHTML = `
    <div class="ytContent"> 
      <div class="ytThumnail">
        <img src="https://img.youtube.com/vi/${id}/mqdefault.jpg" alt="">
      </div>
      <div class="ytInfo">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
      </div>
    </div>
    <div class="ytAccessBtn">
      <p class="ytAccessBtnAdd">Add To PlayList</p>
      <p class="ytAccessBtnPlay">Play</p>
    </div>
    `;
  ytResultContainer.appendChild(newDiv); 

  const ytContent = document.querySelectorAll(".ytContent");
  const ytAccessBtn = document.querySelectorAll(".ytAccessBtn");
  const ytAccessBtnPlay = document.querySelectorAll(".ytAccessBtnPlay");

  // 플레이리스트 & 플레이 버튼 보이기/감추기
  ytContent[i].addEventListener("click", () => {
    ytAccessBtn[i].classList.toggle("active");
  });

  // 선택한 비디오 유튜브로 실행
  ytAccessBtnPlay[i].addEventListener("click", () => {
    mUContainer.classList.toggle("active");
    mUopenAndClose.classList.toggle("active");
    ytAccessBtn[i].classList.toggle("active");
    ytVideoPlayer_iframe.src = `https://www.youtube.com/embed/${id}`
  });
}

// Music Player Sizing
window.addEventListener('resize', resizingYoutube);

// Music Player Interface Open and Close
mUopenAndClose.addEventListener("click", function () {
  mUContainer.classList.toggle("active");
  mUopenAndClose.classList.toggle("active");
});

// Music Player Interface Menu Open and Close
mUmenuListBtn.addEventListener("click", () => {
  mUmenuList.classList.toggle("active");
  mUmenuListDummy.classList.toggle("active");
});

// Go to Playlist 
playListMusic.addEventListener("click", () => {
  mUmenuList.classList.add("active");
  mUmenuListDummy.classList.add("active");
  getAndShowPlaylist();
});

// to Search user-inputed(by enter) Music
musicSearchBox_input.addEventListener("keydown", () => {
  if (event.keyCode == 13) {
    searchMusic();
  }
});

// to Search user-inputed(by click) Music
musicSearchBox_Img.addEventListener("click", () => {
  searchMusic();
});



// Initializing 
resizingYoutube();
createYtResult(0, "unxxm3Q6Ob8", "PREP - Line By Line feat. Cory Wong & Paul Jackson jr", "PREP");
createYtResult(1, "s8K7yBk_DI4", "한국군가 - 육군가 [Army Song]", "머한민국");
createYtResult(2, "HZo539SVHJ4", "태진아 - 진진자라 (MBC 가요베스트 456회 #13) 15/11/15/평창1부", "여수MBC Music+(Kpop&Trot)");
createYtResult(3, "EhQGoasDCRg", "속이 꽉찬 남자 99.9%", "배일호");
createYtResult(4, "tV2bf46doRc", "백지영 - 내 귀에 캔디(feat. Taec-yeon), 백지영 - 내 귀에 캔디(feat. 택연), Mus", "MBCkpop");
createYtResult(5, "9zEl-FQLI4A", "Sun Rai - San Francisco Street", "Sun Rai");
createYtResult(6, "WXOlNBDVt0o", "HONNE - no song without you", "H O N N E");
createYtResult(7, "dTwj7PhpY9M", "Ruel - Painkiller (Official Video)", "RUEL");
createYtResult(8, "hWOB5QYcmh0", "HONNE - Day 1 ◑", "H O N N E");
createYtResult(9, "HfK5xxZ8bhM", "잼민이 담당일찐 등장ㅋㅋㅋㅋㅋ", "임선비");
// getAndShowPlaylist();
mUContainer.classList.toggle("active");
mUopenAndClose.classList.toggle("active");
mUmenuList.classList.toggle("active");
mUmenuListDummy.classList.toggle("active");
ytVideoPlayer_iframe.src = `https://www.youtube.com/embed/hoknJbAsOZY`;