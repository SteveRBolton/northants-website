import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import { CouncilSignposting } from './__generated__/CouncilSignposting';

export default function transform(from: CouncilSignposting): SignpostLinksProps {
  return {
    TopLineText: from.topLine ?? undefined,
    OtherCouncilLink: from.otherCouncil?.url,
    SignpostLinksArray: from.signposts.map((signpost) => ({
      areaName: signpost.council.name,
      url: signpost.link?.url ?? signpost.council.homepage.url,
    })),
  };
}
