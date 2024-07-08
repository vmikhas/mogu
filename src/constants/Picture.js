export default function Picture({sources, imgAttr}) {
	// console.log('sources ----> ', !!sources)

  return (
      <picture>
          {sources ? (sources.map((source, id) => <source key={id} {...source}/>)) : null}
          <img {...imgAttr}/>
      </picture>
  );
}