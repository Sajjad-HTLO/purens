import heroHarvestImg from '../assets/images/hero_lavender_harvest_1794598255772.jpg';
import aromatherapyImg from '../assets/images/aromatherapy_still_life_1794598258015.jpg';
import perfumeryImg from '../assets/images/natural_perfumery_roses_1794598259688.jpg';
import botanicalLivingImg from '../assets/images/botanical_living_ritual_1794598262341.jpg';
import philosophyImg from '../assets/images/philosophy_herb_harvest_1794598262811.jpg';

export type BotanicalIllustrationKind = 'lavender' | 'rose' | 'olive' | 'rosemary';

export interface OlfactoryAccord {
  id: 'top' | 'heart' | 'base';
  tier: string;
  title: string;
  botanicals: string;
  impression: string;
}

export interface RitualNote {
  moment: string;
  title: string;
  detail: string;
}

export interface EditorialPlateMetadata {
  plateNumber: string;
  latinBinomial: string;
  terroir: string;
  harvestSeason: string;
  extractionMethod: string;
  aromaticProfile: string;
}

export interface EditorialChapter {
  id: string;
  chapterNumber: string;
  label: string;
  headline: string;
  description: string;
  extendedNote: string;
  image: string;
  imageAlt: string;
  caption: string;
  aspectClass: string;
  imageColumnClass: string;
  textColumnClass: string;
  surfaceTone: 'ivory' | 'cream';
  accentTheme: 'sage-olive' | 'rose-brown' | 'olive-earth' | 'philosophy';
  illustration: BotanicalIllustrationKind;
  botanicalHighlights: string[];
  plateMetadata: EditorialPlateMetadata;
  accords?: OlfactoryAccord[];
  rituals?: RitualNote[];
  ctaLabel?: string;
}

export interface HerbariumSpecimen {
  id: string;
  commonName: string;
  latinName: string;
  origin: string;
  harvestWindow: string;
  distillationYield: string;
  olfactoryFamily: string;
  tastingNote: string;
  chapterRef: string;
}

export const HERO_CONTENT = {
  brand: 'PURENS',
  tagline: 'The Essence of Nature.',
  subtitle: 'Discover the beauty of nature through the art of pure essential oils.',
  ctaLabel: 'Explore Our World',
  image: heroHarvestImg,
  imageAlt:
    'Artisan hands gently harvesting fresh wild lavender stems with traditional shears in a misty sunlit Provençal field at dawn',
  provenanceLocations: [
    'Haute-Provence',
    'Kazanlak Rose Valley',
    'Calabria',
    'Mediterranean Hillsides',
  ],
};

export const EDITORIAL_CHAPTERS: EditorialChapter[] = [
  {
    id: 'aromatherapy',
    chapterNumber: '01',
    label: 'AROMATHERAPY',
    headline: 'The Art of Aromatherapy',
    description:
      'Reconnect with the natural world through the delicate aromas of essential oils. From the refreshing scent of citrus to the calming notes of lavender, discover the beauty of botanical fragrances and the rituals they inspire.',
    extendedNote:
      'Distilled slowly in small copper and glass vessels at dawn, each botanical essence preserves the quiet breath of the landscape where it grew—inviting moments of stillness, clarity, and unhurried presence.',
    image: aromatherapyImg,
    imageAlt:
      'Freshly cut lavender stems, silver eucalyptus leaves, a hand-blown glass distillation flask, and a dark amber essential oil bottle on raw travertine stone in morning window light',
    caption: 'Plate I — Lavandula angustifolia & Eucalyptus globulus, morning hydrosol study on raw travertine.',
    aspectClass: 'aspect-[4/3]',
    imageColumnClass: 'lg:col-span-7',
    textColumnClass: 'lg:col-span-5',
    surfaceTone: 'ivory',
    accentTheme: 'sage-olive',
    illustration: 'lavender',
    botanicalHighlights: [
      'High-Altitude Fine Lavender',
      'Silver-Leaf Eucalyptus',
      'Sun-Ripened Bergamot Rind',
    ],
    plateMetadata: {
      plateNumber: 'Plate I · Archive 01',
      latinBinomial: 'Lavandula angustifolia & Eucalyptus globulus',
      terroir: 'Limestone plateaus of Sault, Haute-Provence (1,100m)',
      harvestSeason: 'Late July — Early August, first morning light',
      extractionMethod: 'Low-pressure copper steam distillation',
      aromaticProfile: 'Herbaceous, dewy floral, crisp camphoraceous leaf, soft balsamic dry-down',
    },
  },
  {
    id: 'perfumery',
    chapterNumber: '02',
    label: 'NATURAL PERFUMERY',
    headline: 'Nature, Bottled as Art',
    description:
      "Every botanical carries its own fragrance and character. From the delicate elegance of rose to the warm richness of cardamom and the freshness of citrus, explore the art of natural perfumery through nature's most beautiful ingredients.",
    extendedNote:
      'Guided by classical European perfumery traditions, we compose purely with whole plant essences, absolutes, and cold-pressed rinds—allowing living ingredients to unfold on warm skin with nuanced depth.',
    image: perfumeryImg,
    imageAlt:
      'Dew-kissed pale pink Damask roses, loose rose petals, crushed green cardamom pods, dried bergamot peel, and a faceted clear glass perfume flacon on antique walnut wood',
    caption: 'Plate II — Rosa damascena, crushed Elettaria cardamomum & sun-cured citrus peels in the parfumier’s study.',
    aspectClass: 'aspect-[3/4]',
    imageColumnClass: 'lg:col-span-5',
    textColumnClass: 'lg:col-span-7',
    surfaceTone: 'cream',
    accentTheme: 'rose-brown',
    illustration: 'rose',
    botanicalHighlights: [
      'Dawn-Picked Damask Rose',
      'Guatemalan Green Cardamom',
      'Cold-Pressed Bitter Orange',
    ],
    plateMetadata: {
      plateNumber: 'Plate II · Archive 02',
      latinBinomial: 'Rosa damascena · Elettaria cardamomum · Citrus bergamia',
      terroir: 'Kazanlak Valley & Reggio Calabria coastal groves',
      harvestSeason: 'May blossom dawn picking · Autumnal spice curing',
      extractionMethod: 'Traditional water-steam cohobation & cold rind expression',
      aromaticProfile: 'Velvety honeyed rose petal, luminous citrus zest, warm resinous spice',
    },
    accords: [
      {
        id: 'top',
        tier: 'Prelude · Top Notes',
        title: 'Luminous Citrus & Leaf',
        botanicals: 'Calabrian Bergamot · Petitgrain Bigarade · Green Mandarin',
        impression: 'A bright, sun-warmed opening reminiscent of Mediterranean orchards after morning rain.',
      },
      {
        id: 'heart',
        tier: 'Core · Heart Notes',
        title: 'Velvet Floralcy',
        botanicals: 'Damask Rose Otto · Wild Chamomile · Geranium Bourbon',
        impression: 'Lush, dewy petals harvested before sunrise when volatile aromatic oils reach peak richness.',
      },
      {
        id: 'base',
        tier: 'Sillage · Base Notes',
        title: 'Warm Spice & Woods',
        botanicals: 'Crushed Green Cardamom · Atlas Cedarwood · Vetiver Root',
        impression: 'An intimate, lingering trail of spiced seed pods, aged timber, and sun-baked earth.',
      },
    ],
  },
  {
    id: 'botanical-living',
    chapterNumber: '03',
    label: 'BOTANICAL LIVING',
    headline: 'Bring Nature Into Everyday Life',
    description:
      'Nature has a beautiful way of inspiring everyday moments. Discover how botanical aromas can become part of your daily rituals, creating meaningful sensory experiences through the timeless beauty of essential oils.',
    extendedNote:
      'Whether diffused gently across sunlit linen, resting on porous stone beside an open window, or marking the transition from day into evening, pure botanical scent turns familiar spaces into sanctuaries of quiet beauty.',
    image: botanicalLivingImg,
    imageAlt:
      'Sunlit stone terrace table draped in natural ivory Belgian linen with an olive wood bowl of fresh rosemary and chamomile blossoms beside an amber essential oil bottle and porous stone diffuser',
    caption: 'Plate III — Dappled olive-grove light, unbleached linen, carved olive wood & porous stone.',
    aspectClass: 'aspect-[4/3]',
    imageColumnClass: 'lg:col-span-6',
    textColumnClass: 'lg:col-span-6',
    surfaceTone: 'ivory',
    accentTheme: 'olive-earth',
    illustration: 'olive',
    botanicalHighlights: [
      'Roman Chamomile Blossom',
      'Coastal Wild Rosemary',
      'Mediterranean Cypress Leaf',
    ],
    plateMetadata: {
      plateNumber: 'Plate III · Archive 03',
      latinBinomial: 'Chamaemelum nobile & Salvia rosmarinus',
      terroir: 'Sun-drenched hillside estates of Umbria & Provence',
      harvestSeason: 'Midsummer solstice — Late September',
      extractionMethod: 'Artisanal field-side steam distillation',
      aromaticProfile: 'Warm hay, crisp herbal foliage, sun-bleached linen, soft apple-blossom sweetness',
    },
    rituals: [
      {
        moment: 'First Light',
        title: 'Open Windows & Citrus Air',
        detail: 'Two drops of cold-pressed bergamot and rosemary on unglazed ceramic to greet morning light.',
      },
      {
        moment: 'Afternoon Pause',
        title: 'Linen, Stone & Timber',
        detail: 'Subtle herbaceous notes of eucalyptus and petitgrain bringing outdoor freshness to quiet interiors.',
      },
      {
        moment: 'Dusk Stillness',
        title: 'Unhurried Evening Ritual',
        detail: 'Soft lavender and warm cedarwood diffused gently as daylight fades into twilight.',
      },
    ],
  },
  {
    id: 'philosophy',
    chapterNumber: '04',
    label: 'OUR PHILOSOPHY',
    headline: 'Rooted in Nature, Inspired by Purity',
    description:
      'At PURENS, we celebrate the extraordinary beauty of nature and its aromatic treasures. Our inspiration comes from botanical ingredients, timeless traditions, and the simple elegance of natural fragrances.',
    extendedNote:
      'Every drop begins in living soil, shaped by rain, altitude, and the patient hands of growers who honor seasonal rhythms. Nothing synthetic is added; nothing essential is taken away.',
    image: philosophyImg,
    imageAlt:
      'Artisan hands carefully gathering fresh wild rosemary and white mountain blossoms into a woven willow basket on a terraced Mediterranean hillside at golden dawn',
    caption: 'Plate IV — Hand-harvesting wild rosemary and mountain blossoms along terraced hillsides at daybreak.',
    aspectClass: 'aspect-[16/9]',
    imageColumnClass: 'lg:col-span-7',
    textColumnClass: 'lg:col-span-5',
    surfaceTone: 'cream',
    accentTheme: 'philosophy',
    illustration: 'rosemary',
    botanicalHighlights: [
      'Single-Origin Harvests',
      'Slow Copper Distillation',
      'Unadulterated Botanicals',
    ],
    plateMetadata: {
      plateNumber: 'Plate IV · Archive 04',
      latinBinomial: 'Rosmarinus officinalis & Thymus vulgaris',
      terroir: 'Terraced limestone slopes, Mediterranean basin',
      harvestSeason: 'Spring & Autumnal equinox harvests by hand',
      extractionMethod: 'Traditional slow hydro-distillation in spring water',
      aromaticProfile: 'Resinous wild herbs, warm mineral earth, crisp mountain air',
    },
    ctaLabel: 'Discover PURENS',
  },
];

export const HERBARIUM_SPECIMENS: HerbariumSpecimen[] = [
  {
    id: 'lavender',
    commonName: 'Fine High-Altitude Lavender',
    latinName: 'Lavandula angustifolia',
    origin: 'Sault Plateau, Haute-Provence',
    harvestWindow: 'Late July — August',
    distillationYield: '150 kg blossoms per 1 kg essence',
    olfactoryFamily: 'Aromatic Floral',
    tastingNote: 'Silky, herbaceous, and delicately sweet with a clean mountain-air transparency.',
    chapterRef: 'Chapter 01 · Aromatherapy',
  },
  {
    id: 'damask-rose',
    commonName: 'Dawn Damask Rose',
    latinName: 'Rosa damascena',
    origin: 'Kazanlak Valley, Bulgaria',
    harvestWindow: 'May — Early June (05:00–09:00)',
    distillationYield: '3,500 kg petals per 1 kg rose otto',
    olfactoryFamily: 'Floral Nectar',
    tastingNote: 'Luminous, honeyed crimson petals balanced by a subtle green-stem freshness and warm spice.',
    chapterRef: 'Chapter 02 · Natural Perfumery',
  },
  {
    id: 'bergamot',
    commonName: 'Sun-Cured Bergamot',
    latinName: 'Citrus bergamia',
    origin: 'Ionian Coast, Reggio Calabria',
    harvestWindow: 'November — January',
    distillationYield: '200 kg fresh fruit rind per 1 kg oil',
    olfactoryFamily: 'Hesperidic Citrus',
    tastingNote: 'Sparkling bitter-sweet citrus zest layered with delicate floral tea nuances.',
    chapterRef: 'Chapter 02 · Natural Perfumery',
  },
  {
    id: 'cardamom',
    commonName: 'Green Pod Cardamom',
    latinName: 'Elettaria cardamomum',
    origin: 'Cloud Forests, Alta Verapaz',
    harvestWindow: 'September — December',
    distillationYield: '25 kg sun-dried pods per 1 kg essence',
    olfactoryFamily: 'Warm Aromatic Spice',
    tastingNote: 'Velvety, resinous warmth with a cool, aromatic opening and woody balsamic depth.',
    chapterRef: 'Chapter 02 · Natural Perfumery',
  },
  {
    id: 'eucalyptus',
    commonName: 'Silver-Leaf Eucalyptus',
    latinName: 'Eucalyptus globulus',
    origin: 'Coastal Hills, Lusitania',
    harvestWindow: 'Late Summer — Autumn',
    distillationYield: '55 kg fresh foliage per 1 kg essence',
    olfactoryFamily: 'Crisp Foliage',
    tastingNote: 'Dewy, expansive, and clarifying leaf aroma softened by gentle woody undertones.',
    chapterRef: 'Chapter 01 · Aromatherapy',
  },
  {
    id: 'rosemary',
    commonName: 'Wild Hillside Rosemary',
    latinName: 'Salvia rosmarinus',
    origin: 'Mediterranean Limestone Terraces',
    harvestWindow: 'April — June',
    distillationYield: '80 kg flowering tops per 1 kg essence',
    olfactoryFamily: 'Herbaceous Maquis',
    tastingNote: 'Sun-warmed coastal scrubland, fresh piney needles, and clean mineral vitality.',
    chapterRef: 'Chapter 03 & 04 · Botanical Living',
  },
];
