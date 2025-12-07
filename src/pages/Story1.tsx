import "../styles/pages.css";
import { useEffect } from "react";

export default function Story1() {
  useEffect(() => {
    document.title = "Kapita Pandit: Color Drama Cakes";
  }, []);
  return (
    <div className="story-container">
      <h1 className="story-title"> Color Drama Cakes</h1>
      <p className="story-paragraph">
        {" "}
        Hailing from Assam, India, Kapita Pandit’s story has stretched across
        three continents, and made numerous people cry tears of joy with her
        hyper-realistic cakes. That’s exactly what happened. After completing
        her master’s degree in communication and journalism, she got married and
        moved to Chicago, where her older daughter was born. Not long after, her
        family packed up and moved again, this time to Sydney, Australia.
        Australia shifted everything for her and became the mark of an
        unexpected chapter of her life.{" "}
      </p>

      <p className="story-paragraph">
        {" "}
        At first, she started a small business selling items that weren’t
        accessible in certain countries, like Victoria’s Secret products, on
        eBay. Her background in media eventually helped her land audio work with
        local TV channels in Sydney. And on her daughter’s second birthday, she
        decided she wanted to make it special, and she baked a unique cake just
        for her. That one cake changed everything. Friends asked for cakes, then
        friends of friends, until one day she realized that what started as a
        mother’s gift had quietly become a full-fledged business. So she
        officially registered it.{" "}
      </p>

      <p className="story-paragraph">
        {" "}
        She hadn’t gone to culinary school or taken a single professional baking
        course, her teacher became YouTube and endless trial-and-error. She made
        everything from scratch. Looking back, she said her mom always claimed
        she was creative, even as a child, so maybe it wasn’t that surprising
        after all.{" "}
      </p>

      <p className="story-paragraph">
        {" "}
        Because her daughter is allergic to eggs and nuts, she specialized in
        eggless and nutless cakes. At the time, most people around her assumed
        eggless cakes couldn’t be soft or stretchy, but she managed to change
        that perception through sheer skill and experimentation. Networking
        played a huge role in her journey too. She started by making cakes for
        friends’ events, and people who saw those cakes would recommend her. Her
        past work in communications also connected her with photographers who
        later referred her to weddings and other large events. Over the years,
        she’s worked with Indians from all communities, Filipino, and Chinese
        communities to name a few, becoming a trusted name without ever needing
        formal advertising. Everything spread through word of mouth.{" "}
      </p>

      <p className="story-paragraph">
        {" "}
        The owner of Color Drama Cakes is known for her shockingly realistic
        cakes, sometimes indistinguishable from the objects they replicate. She
        follows one guiding rule: she never repeats a design. Every client gets
        something uniquely theirs. After fourteen years, that rule has pushed
        her creativity further than she ever imagined. She said she’s learned to
        read clients’ aesthetics just by meeting them, and she loves seeing
        their faces when she unveils the cake. Some have even cried.{" "}
      </p>

      <p className="story-paragraph">
        {" "}
        Through it all, her husband has been her anchor. As an engineer, he
        helps her with 3D planning, scaling, and structural designs, especially
        for complex cakes like her once-“impossible” unicorn cake. Her family’s
        support made it possible to run a business without sacrificing family
        time, and she appreciates the slower weeks as chances to rest, recharge,
        and simply enjoy life.{" "}
      </p>

      <p className="story-paragraph">
        Her message to anyone dreaming of starting something new was simple:
        “Just start. Don’t think about the end goal—just take the next step.”{" "}
      </p>

      <p className="story-paragraph">
        Talking to her made us realize that creativity isn’t something that
        appears all at once; it’s built through tiny leaps of courage. Her story
        showed us that beginnings often look impossible until you're already in
        motion. And sometimes, the first step is all it takes to find the path
        meant for you.{" "}
      </p>
    </div>
  );
}
