# Sections

Wedding registry keys:

- `host_info` -> `CoupleInfoSection`
- `countdown` -> `CountdownSection`
- `music_effects` -> `MusicEffectsSection`
- `main_event` -> `CeremonySection`
- `venue` -> `VenueSection`
- `secondary_event` -> `ReceptionSection`
- `timeline_program` -> `TimelineProgramSection`
- `entourage` -> `EntourageSection`
- `principal_sponsors` -> `PrincipalSponsorsSection`
- `attire_motif` -> `AttireMotifSection`
- `extra_info` -> `ExtraInfoSection`
- `gallery` -> `GallerySection`
- `rsvp_form` -> `RsvpCallToActionSection`
- `gift_details` -> `GiftDetailsSection`
- `guestbook` -> `GuestbookSection`
- `story_message` -> `LoveStorySection`
- `contact_socials` -> `ContactFooterSection`

Required sections: `host_info`, `main_event`, `venue`, `rsvp_form`.

Optional sections: `countdown`, `music_effects`, `secondary_event`, `timeline_program`, `entourage`, `principal_sponsors`, `attire_motif`, `extra_info`, `gallery`, `gift_details`, `guestbook`, `story_message`, `contact_socials`.

Future keys visible in platform config but not implemented here: `overview`, `style_theme`.

`gallery` is a foundation section. Production gallery rendering requires main platform editor/API support and live public image data. Do not hardcode a client gallery in the starter.

Live mode renders enabled sections in API order, hides empty optional sections, and skips unknown keys safely.

Current supported order sources, in priority order:

- `data.sections` as an ordered string array.
- `data.content.layout.sectionOrder`.
- Legacy website section order fields.
- Object key order as a final fallback.

The platform section keys above are protected. Do not rename them for design work.

Stable anchor mapping:

- `host_info` -> `#couple`
- `countdown` -> `#countdown`
- `main_event` -> `#ceremony`
- `venue` -> `#venue`
- `secondary_event` -> `#reception`
- `timeline_program` -> `#timeline`
- `attire_motif` -> `#attire`
- `gallery` -> `#gallery`
- `gift_details` -> `#gifts`
- `guestbook` -> `#messages`
- `rsvp_form` -> `#rsvp`
- `contact_socials` -> `#contact`
