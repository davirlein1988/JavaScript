print "please, enter a temperature and scale (c or f): "
STDOUT.flush
str = gets
exit if str.nill? || str.empty?
str.chomp!
temp, scale = str.split(" ")

abort "#{temp} is not a valid number." if temp !~ /-?\d+/

temp = temp.to_f
case scale
  when "C", "c"
    f = 1.8 *temp +32
  when "F", "f"
    c = (5.0/9.0)*(temp-32)
  else
    abort "Must specify c or f"
  end

  if f.nil?
    puts "#{c} degrees C"
  else
    puts "#{f} degrees F"
  end 
