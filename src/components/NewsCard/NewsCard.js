import './NewsCard.css';
import CardButton from "../CardButton/CardButton";

function NewsCard() {
  return (
    <li className="card">
      <div className="card__image">
        <CardButton />
      </div>
      <time className="card__date">November 4, 2020</time>
      <h2 className="card__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
      <p className="card__article">Ever since I read Richard Louv's influential book,
        "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.
        This advice, which Louv attributes to nature educator Jon Young, is for both adults
        and children to find Ever since I read Richard Louv's influential book,
        "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.
        This advice, which Louv attributes to nature educator Jon Young, is for both adults
        and children to find...
      </p>
      <h3 className="card__subtitle">TREEHUGGER</h3>
    </li>
  )
}

export default NewsCard; 