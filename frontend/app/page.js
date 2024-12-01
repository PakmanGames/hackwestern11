'use client';
import { createContext } from "react";
import ArticleBlock from "@/components/articleBlock";
import SideBar from "@/components/sideBar";

// test data
const info = [
  {
      "headline": "Rebels Seize Control Over Most of Syria’s Largest City",
      "description": "Rebels had seized most of Syria’s largest city, Aleppo, as of Saturday, according to a war monitoring group and to fighters who were combing the streets in search of any remaining pockets of government forces.",
      "content": "Rebels had seized most of Syria’s largest city, Aleppo, as of Saturday, according to a war monitoring group and to fighters who were combing the streets in search of any remaining pockets of government forces.\nThe antigovernment rebels said they had faced little resistance on the ground in Aleppo. But Syrian government warplanes responded with airstrikes on the city for the first time since 2016, according to the war monitoring group, the Syrian Observatory for Human Rights.\nAleppo came to a near standstill on Saturday, with many residents staying indoors for fear of what the sudden flip in control might mean, witnesses said. Others did venture out into the streets, welcoming the fighters and hugging them. Some rebels tried to reassure city residents and sent out at least one van to distribute bread.\nThe rapid advance on Aleppo came just days into a surprise rebel offensive launched on Wednesday against the autocratic regime of President Bashar al-Assad. The developments are both the most serious challenge to Mr. al-Assad’s rule and the most intense escalation in years in a civil war that had been mostly dormant.\nThe timing of the assault suggested that the rebels could be exploiting weaknesses across an alliance linking Iran to the militant group Hezbollah in Lebanon as well as the Assad regime in Syria and others.\nIn Aleppo on Saturday, well-armed rebel fighters dressed in camouflage patrolled streets still lined with the ubiquitous posters of Mr. al-Assad. The opposition forces said that although they were in control of nearly the entire city, they had not yet solidified their hold on it.",
      "image_caption": "bau bau bau",
      "article_index": 0
  },
  {
      "headline": "Israel-Hezbollah Cease-Fire Rests on a Wobbly Linchpin: Lebanon’s Army",
      "description": "Rebels had seized most of Syria’s largest city, Aleppo, as of Saturday, according to a war monitoring group and to fighters who were combing the streets in search of any remaining pockets of government forces.",
      "content": "The fragile peace between Israel and Hezbollah largely hangs on 10,000 soldiers in the Lebanese Army.\nThe last time it was tasked with enforcing a cease-fire, it plainly failed.\nThe current cease-fire, which came into effect on Wednesday, calls for a 60-day truce between Israel and the Lebanese militant group Hezbollah, during which time Israeli forces gradually withdraw from Lebanon, and Hezbollah moves away from Lebanon’s border with Israel.\nTo ensure Hezbollah’s retreat, the agreement relies heavily upon the Lebanese Army, a national military strained under competing priorities and sectarian complexities that has long proved unable — or unwilling — to rein in Hezbollah.\nIn a new buffer zone along the border — a strip of land ranging from a few miles to 18 miles wide — the Lebanese Army is responsible for destroying all Hezbollah military infrastructure, confiscating any unauthorized weapons and blocking the transfer or production of arms. United Nations peacekeeping forces will sometimes accompany the Lebanese soldiers in a supporting role. On Wednesday, the army began deploying more soldiers to the region.\nBut that approach has been tried before — and it did not work.\nThe Israel-Hezbollah cease-fire that ended the 2006 Lebanon War, known as Resolution 1701, also called on the Lebanese Army to keep Hezbollah away from the border, with U.N. peacekeepers assisting. Years later, Hezbollah emerged even stronger than before, with extensive weaponry, infrastructure and tunnels across the border region.",
      "image_caption": "bau bau bau",
      "article_index": 1
  },
  {
      "headline": "For Rising Democrats, the Quiet Race to Lead the Party Began Months Ago",
      "description": "Rebels had seized most of Syria’s largest city, Aleppo, as of Saturday, according to a war monitoring group and to fighters who were combing the streets in search of any remaining pockets of government forces.",
      "content": "In Texas, Gov. Gretchen Whitmer of Michigan paid homage to Beyoncé, a Houston native, and told a room full of Democratic activists about the party’s successes in her state.\nIn Georgia, Gov. Josh Shapiro of Pennsylvania spoke at a storied Atlanta church where the Rev. Dr. Martin Luther King Jr. once preached, introducing himself as a fellow person of faith.\nAnd as early voting began in Nevada, Gov. JB Pritzker of Illinois was in the state, rallying with union members and attending a block party in support of abortion rights.\nDemocrats didn’t have a competitive presidential primary race this year, the kind of contest that could have propelled state leaders to national stardom and forced a robust discussion about the direction of the party.\nBut as up-and-coming Democrats blanketed the country — campaigning for the presidential ticket, promoting down-ballot candidates, working the national fund-raising and cable news circuits — many of them also managed to quietly develop bigger platforms, broader networks and a batch of new admirers across some of the country’s most politically important states.\nSuch advantages will help determine who has outsize influence in the debate over the beleaguered party’s future — and who generates the most buzz in the earliest stages of the next presidential race.\nThank you for your patience while we verify access. If you are in Reader mode please exit and log into your Times account, or subscribe for all of The Times.\nThank you for your patience while we verify access.\nAlready a subscriber? Log in.\nWant all of The Times? Subscribe.",
      "image_caption": "bau bau bau",
      "article_index": 2
  }
];

export const contextInfo = createContext(info);

export default function Home() {

  return (
    <div className="flex px-48">
      <div className="items-center justify-center">
        <ArticleBlock info={info[0]}/>
        <ArticleBlock info={info[1]}/>
        <ArticleBlock info={info[2]}/>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
}
