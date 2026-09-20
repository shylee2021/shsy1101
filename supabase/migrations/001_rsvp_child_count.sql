-- Run once in Supabase SQL Editor before deploying the updated RSVP form.
-- Existing responses and older clients default to zero children.
-- party_size stays the total; adult count = party_size - child_count.
begin;

alter table public.rsvp
  add column child_count integer not null default 0,
  add constraint rsvp_child_count_check check (child_count >= 0 and child_count < party_size);

grant insert (child_count) on public.rsvp to anon;
notify pgrst, 'reload schema';

commit;
