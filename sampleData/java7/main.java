import org.apache.log4j.Logger;
import com.sun.jna;

public class Foo {
  public final static transient int foo;
  public static void main(int[] argv) {
    System.out.println("foo bar");
  }
}
