// 현 시즌 던전ID 목록(기준: WCL 던전ID)
export const mplusDungeonList = [
    { id: 60670, koName: "asd" },
    { id: 61822, koName: "asd" },
    { id: 62286, koName: "asd" },
    { id: 62290, koName: "asd" },
    { id: 12652, koName: "asd" },
    { id: 12660, koName: "asd" },
    { id: 12662, koName: "asd" },
    { id: 12669, koName: "asd" }
  ];

  export function getKoDungeonName(dungeonId) {
    const foundDungeon = mplusDungeonList?.find(dungeon => dungeon?.id == dungeonId);

    return foundDungeon ? foundDungeon?.koName : dungeonId;
  }
  

// 출력에 제외할 보스 스킬들
export const bannedBossSkills = [
    439522, // 실타래 2넴 협응보 자리바꾸기. 두마리가 서로 1~2초 간격으로 써서 타임라인이 지저분해짐
    435012, // 아라카라 2넴 꿰뚫기(임페일) 브레스. 시도때도 없이 발사해서 타임라인이 지저분해짐. 피할수도 있어서 추적의미X
    270183, // 보랄러스 막넴 물뿌리기 바닥. 맞으면 죽고 피하면 그만인 스킬이라 제외
    453141, // 새인호 1넴 무너지는밤. 같은 스킬 453140과 겹쳐 제외
    433731,
    439506, // 위와 같은 스킬. 아라카라 2넴 잠복 돌진
    439749, // 바위금고 스카모락 시작 이벤트.
    326629,
    320359,
    320200, // 위 2개와 함께 추적 필요없는 죽상 스티치플래시 스킬
    321894, // 죽상 4넴 날토르 어둠의추방
    274002, // 보랄 1넴 쫄소환
    461513,
    449985,
    322563, // 쓸일없음
    448953, // 그림바톨 1넴 보스입구막는 스킬
    456773,
];