alter table public.rsvp enable row level security;
revoke all on public.rsvp from anon, authenticated;
grant insert (name, side, attending, party_size, meal_type, message) on public.rsvp to anon;
grant usage on sequence public.rsvp_id_seq to anon;

drop policy if exists rsvp_insert on public.rsvp;
create policy rsvp_insert on public.rsvp
  for insert to anon with check (true);
