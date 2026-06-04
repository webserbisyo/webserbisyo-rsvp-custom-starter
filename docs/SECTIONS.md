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
- `rsvp_form` -> `RsvpCallToActionSection`
- `gift_details` -> `GiftDetailsSection`
- `guestbook` -> `GuestbookSection`
- `story_message` -> `LoveStorySection`
- `contact_socials` -> `ContactFooterSection`

Required sections: `host_info`, `main_event`, `venue`, `rsvp_form`.

Optional sections: `countdown`, `music_effects`, `secondary_event`, `timeline_program`, `entourage`, `principal_sponsors`, `attire_motif`, `extra_info`, `gift_details`, `guestbook`, `story_message`, `contact_socials`.

Future keys visible in platform config but not implemented here: `overview`, `gallery`, `style_theme`.

Live mode renders enabled sections in API order, hides empty optional sections, and skips unknown keys safely.

Current supported order sources, in priority order:

- `data.sections` as an ordered string array.
- `data.content.layout.sectionOrder`.
- Legacy website section order fields.
- Object key order as a final fallback.

The platform section keys above are protected. Do not rename them for design work.
