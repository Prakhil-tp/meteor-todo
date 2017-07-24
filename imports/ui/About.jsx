import React,{Component} from 'react';
import {render} from 'react-dom';


export default class About extends Component {

    setVar(){
      Session.set('test','hello you clicked the button');
    }
    setSign(){
      Session.set('Meteor.loginButtons.dropdownVisible',true);
      Session.set('Meteor.loginButtons.inSignupFlow',true);
    }
    render(){
      return(
              <div>
              <h1>About us</h1>
              <p> The show opens in the "nightly world of the dead and the dreamers",
               where Luigi Lucheni is being interrogated by a Judge as to why he has
               murdered the Empress Elisabeth. Lucheni claims that he did no more than
              what Elisabeth herself wanted, since all her life Elisabeth has been in
               love with Death himself - and vice versa. As his witnesses, Lucheni brings
              back the dead aristocracy of the bygone era and takes us to the past, where
             he serves as a sarcastic narrator of the events that lead to the transformation
            of the sweet and innocent Sisi to the revered and infamous Elisabeth, Empress of Austria
             and Hungary, and her decline through later years until her assassination.
              At a young age, Sisi, grown up in a seemingly sorrowless environment, experiences her first encounter with Death, which launches a love-hate affair that will span her entire life. Lucheni claims that once Franz Joseph, the Emperor of Austria, picks Elisabeth as his bride - for once opposing his domineering mother Sophie - he begins a chain of events that will eventually topple the Habsburg empire. Elisabeth herself very soon comes to regret her seemingly "fairy-tale marriage" as the biggest mistake of her life. She feels abandoned by her careless husband, psychologically abused by her possessive mother-in-law and is chronically depressed due to her loneliness. There is only one thing that keeps her emotionally stimulated—the dark and sensual shadow of Death; but Elisabeth is reluctant to consummate their relationship. When Death takes her infant daughter, the tragedy shakes the young Empress extremely, but she refuses to give in to Death's sway. After her other three children, including her only son Rudolf, are taken away by Sophie, Elisabeth calluses over and becomes a cold, selfish woman. She flees the Austrian court and spends decades restlessly travelling all over the world, trying in vain to escape from her fear of emptiness. Eventually, Elisabeth makes peace with her husband and finds new meaning in her life when she helps unify Austria and Hungary, but her newfound purpose makes her neglect her psychologically delicate son even further, sending young Rudolf into deep depression and causing him to bond with Death.
              Eventually, Rudolf's own loneliness and his father's pressure cause him to snap and he embraces Death, committing suicide at Mayerling with his mistress, Mary Vetsera. This event completely breaks down Elisabeth and she begs Death to take her. However, her scorned lover now refuses to take her in.</p>
              <button className="btn"
                      onClick={this.setVar}>Click me</button>
              <button className="btn"
                      onClick={this.setSign}>sign up</button>
              </div>

        )
    }
}
