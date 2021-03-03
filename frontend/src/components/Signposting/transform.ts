import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import { CouncilSignposting } from './__generated__/CouncilSignposting';

export default function transform(from: CouncilSignposting): SignpostLinksProps {
  return {
    otherCouncilLink: from.otherCouncil?.url,
    signpostLinksArray: from.signposts.map((signpost) => ({
      sovereignCode: parseInt(signpost.council.code, 10),
      areaName: signpost.council.name,
      url: signpost.link?.url ?? signpost.council.homepage.url,
      cta_text: signpost.ctaText ? signpost.ctaText : undefined,
    })),
  };
}
